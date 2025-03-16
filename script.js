document.getElementById('riskForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const bmi = document.getElementById('bmi').value;
    const bloodPressure = document.getElementById('bloodPressure').value;
    const familyHistory = document.getElementById('familyHistory').value;

    const response = await fetch('https://your-backend-url/api/risk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ age, bmi, bloodPressure, familyHistory })
    });

    const data = await response.json();
    document.getElementById('result').innerText = `Risk Level: ${data.riskCategory}`;
});
