document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    // Display form data for demonstration purposes
    console.log({ username, email, password });
  
    alert('Sign Up Successful!');
    
    // Optionally, send the form data to a server here
    /*
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    }).then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      }).catch((error) => {
        console.error('Error:', error);
      });
    */
  });
  