// results.js
document.addEventListener('DOMContentLoaded', function () {
    // Get the result data from localStorage
    const resultData = JSON.parse(localStorage.getItem('insuranceResult'));

    if (resultData) {
        // Extract plan details
        const { recommended_plan, plan_details, scores } = resultData;
        
        // Display the result
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <h2>Recommended Plan: ${recommended_plan}</h2>
            <p><strong>Plan Details:</strong></p>
            <ul>
                <li>Premium: ${plan_details.premium}</li>
                <li>Deductible: ${plan_details.deductible}</li>
                <li>Network: ${plan_details.network}</li>
            </ul>
            <h3>Plan Scores:</h3>
            <ul>
                <li>Plan A Score: ${scores['Plan A']}</li>
                <li>Plan B Score: ${scores['Plan B']}</li>
                <li>Plan C Score: ${scores['Plan C']}</li>
            </ul>
        `;
    } else {
        // Handle case when there is no data
        document.getElementById('result').innerHTML = '<p>No result available. Please fill out the form first.</p>';
    }
});
