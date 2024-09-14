document.getElementById("healthForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formData = {
      age: document.getElementById("age").value,
      familySize: document.getElementById("familySize").value,
      chronicConditions: document.getElementById("chronicConditions").value,
      healthcareUsage: document.getElementById("healthcareUsage").value
    };
  
    fetch("http://localhost:5000/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      displayRecommendations(data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  });
  
  function displayRecommendations(data) {
    const recommendationsDiv = document.getElementById("recommendations");
    recommendationsDiv.innerHTML = `
      <h2>Recommended Insurance Plan</h2>
      <p><strong>Plan Name:</strong> ${data.recommendation}</p>
      <p><strong>Predicted Future Healthcare Cost:</strong> $${data.futureCost}</p>
    `;
  }
  