  // Get the input element
  const emailInput = document.getElementById('email-input');
  const submitButton = document.querySelector('.submit');
  const inputContainer = document.querySelector('.input-container');
  const errorDiv = document.querySelector('.error');
  const textErrorDiv = document.querySelector('.text-error');
  // Add a focus event listener to the input element
  emailInput.addEventListener('focus', function () {
    inputContainer.style.background = 'linear-gradient(135deg, hsl(0, 80%, 86%) 0%, hsl(0, 74%, 74%) 100%)'; // Change this to the desired background color
  });

  emailInput.addEventListener('blur', function () {
    inputContainer.style.background = 'linear-gradient(135deg, #ece6e6 0%, #dbc8cc 100%)'; // Change this to the desired background color
  });

  submitButton.addEventListener('click', () => {
    const emailValue = emailInput.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    if (!emailValue || !isValidEmail) {
      errorDiv.style.display = 'block';
      textErrorDiv.style.display = 'block';
      inputContainer.style.background = 'linear-gradient(135deg, #cb747a 0%, #fa6662 100%)';
    } else {
      emailInput.value = 'Email sent';
      errorDiv.style.display = 'none';
      textErrorDiv.style.display = 'none';
      inputContainer.style.background = 'linear-gradient(135deg, #ece6e6 0%, #dbc8cc 100%)';
    }
  });
