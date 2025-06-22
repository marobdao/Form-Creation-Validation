// script.js

// Ensure the DOM is fully loaded before running validation logic
window.addEventListener('DOMContentLoaded', function() {
  // Select the form and feedback div
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  // Handle form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve and trim input values
    const username = document.getElementById('username').value.trim();
    const email    = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Initialize validation state and message container
    let isValid = true;
    const messages = [];

    // Username must be at least 3 characters
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // Email must include '@' and '.'
    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push('Please enter a valid email address.');
    }

    // Password must be at least 8 characters
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // Display feedback
    feedbackDiv.style.display = 'block';
    if (isValid) {
      feedbackDiv.style.color = '#28a745';
      feedbackDiv.textContent = 'Registration successful!';
    } else {
      feedbackDiv.style.color = '#dc3545';
      feedbackDiv.innerHTML = messages.join('<br>');
    }
  });
});
