/** *******************************************
* Contact form validation */
const contactForm = document.querySelector('#contact-form');

// Validate if email is lowercase
const validateEmail = (email) => {
  if (/[A-Z]/.test(email)) {
    return false;
  }
  return true;
};

// Submit contact form with email validation
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const error = document.querySelector('.error');
  const isSubmitOk = validateEmail(email);

  if (isSubmitOk) {
    error.style.display = 'none';
    contactForm.submit();
  } else {
    error.style.display = 'block';
    error.innerHTML = 'Email must content only lower case characters';
  }
});