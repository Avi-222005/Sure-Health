document.getElementById('insurance-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Collect form data
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const location = document.getElementById('location').value;
  const chronicConditions = Array.from(document.querySelectorAll('input[name="chronic_conditions"]:checked')).map(el => el.value);
  const surgeries = document.getElementById('surgeries').value;
  const medications = document.getElementById('medications').value;
  const familyHistory = Array.from(document.querySelectorAll('input[name="family_history"]:checked')).map(el => el.value);
  const doctorVisits = document.getElementById('doctor_visits').value;
  const emergencyVisits = document.getElementById('emergency_visits').value;
  const hospitalStays = document.getElementById('hospital_stays').value;
  const specialistVisits = document.getElementById('specialist_visits').value;
  const preventiveCare = document.getElementById('preventive_care').value;
  const smoking = document.getElementById('smoking').value;
  const alcohol = document.getElementById('alcohol').value;
  const exercise = document.getElementById('exercise').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const premium = document.getElementById('premium').value;
  const deductible = document.getElementById('deductible').value;
  const outOfPocket = document.getElementById('out_of_pocket').value;
  const planNetwork = document.getElementById('plan_network').value;
  const futureNeeds = document.getElementById('future_needs').value;
  const familyPlanning = document.getElementById('family_planning').value;
  const travelPlans = document.getElementById('travel_plans').value;
  const comments = document.getElementById('comments').value;

  // Simple validation check
  if (!age || !gender || !location || !surgeries || !medications || !doctorVisits || !emergencyVisits || !hospitalStays || !specialistVisits || !preventiveCare || !smoking || !alcohol || !exercise || !height || !weight || !premium || !deductible || !outOfPocket || !planNetwork || !futureNeeds || !familyPlanning || !travelPlans) {
    alert('Please fill out all required fields.');
    return;
  }

  // Display form data for demonstration purposes
  console.log({
    age, gender, location, chronicConditions, surgeries, medications, familyHistory, doctorVisits, emergencyVisits,
    hospitalStays, specialistVisits, preventiveCare, smoking, alcohol, exercise, height, weight, premium, deductible,
    outOfPocket, planNetwork, futureNeeds, familyPlanning, travelPlans, comments
  });

  // Show success message
  alert('Form submitted successfully!');

  fetch('/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      age, gender, location, chronicConditions, surgeries, medications, familyHistory, doctorVisits, emergencyVisits,
      hospitalStays, specialistVisits, preventiveCare, smoking, alcohol, exercise, height, weight, premium, deductible,
      outOfPocket, planNetwork, futureNeeds, familyPlanning, travelPlans, comments
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      localStorage.setItem('insuranceResult', JSON.stringify(data));
      window.location.href = 'results.html';
    }).catch((error) => {
      console.error('Error:', error);
    });
});
