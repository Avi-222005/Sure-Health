document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Display form data for demonstration purposes
    console.log({ username, password });
  
    alert('Login Successful!');
    
    // Optionally, send the form data to a server here
    /*
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Redirect or handle success response
        window.location.href = 'dashboard.html'; // Redirect to a dashboard or main page
      }).catch((error) => {
        console.error('Error:', error);
      });
    */
  });
  