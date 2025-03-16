document.getElementById('riskForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const bmi = document.getElementById('bmi').value;
    const bloodPressure = document.getElementById('bloodPressure').value;
    const familyHistory = document.getElementById('familyHistory').value;

    try {
        const response = await fetch('healthriskcalculator.azurewebsites.net', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ age, bmi, bloodPressure, familyHistory })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        document.getElementById('result').innerText = `Risk Level: ${data.riskCategory}`;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
});

