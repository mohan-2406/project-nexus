document.getElementById('signup-form-element').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;
    let emailError = document.getElementById('email-error');
    let passwordError = document.getElementById('password-error');
    
    let valid = true;
    
    // Reset error messages
    emailError.textContent = '';
    passwordError.textContent = '';
    
    // Validate email
    if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        valid = false;
    }
    
    // Validate password
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        valid = false;
    }
    
    if (valid) {
        // Submit form if valid
        alert('Signup successful!');
        // You can handle form submission here
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}