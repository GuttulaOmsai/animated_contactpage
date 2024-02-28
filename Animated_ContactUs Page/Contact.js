function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var mobilenumber = document.getElementById('mobilenumber').value;
  var message = document.getElementById('message').value;

  var nameError = document.getElementById('nameError');
  var emailError = document.getElementById('emailError');
  var passwordError = document.getElementById('passwordError');
  var mobileError = document.getElementById('mobileError');
  var messageError = document.getElementById('messageError');

  // Reset error messages
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  mobileError.textContent = '';
  messageError.textContent = '';

  // Basic email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      return false; // Prevent form submission
  }

  // Check for empty fields
  if (name.trim() === '') {
      nameError.textContent = 'Full Name can\'t be blank';
      return false;
  }

  if (password.trim() === '') {
      passwordError.textContent = 'Password can\'t be blank';
      return false;
  }

  if (mobilenumber.trim() === '') {
      mobileError.textContent = 'Mobile Number can\'t be blank';
      return false;
  }

  if (message.trim() === '') {
      messageError.textContent = 'Message can\'t be blank';
      return false;
  }

  // If all validations pass, allow form submission
  return true;
}