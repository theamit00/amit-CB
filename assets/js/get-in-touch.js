
// elements ==
const getInTouchForm = document.forms['get-in-touch-form'];
const getInTouchMessage = document.getElementById('get-in-touch-message');
const getInTouchButton = document.getElementById('get-in-touch-form-button');

const getInTouchScriptURL = 'https://script.google.com/macros/s/AKfycbyraJO6-Vy9E0hp8Q_NPM-B5D1nih5ZtzCnuqYe6a27R6NHyR-hO_chOIBPZM8g1P2L/exec';

getInTouchForm.addEventListener('submit', (e) => {
  
  // prevent default form action
  e.preventDefault();

  // change submit button text to Submitting...
  getInTouchButton.innerHTML = 'Submitting...';

  

  // add URL to formData
  const payload = new FormData(getInTouchForm);
  const paths = window.location.pathname.split('/');
  payload.append('Course', paths[paths.length - 1].slice(0, -5));
  
  // send request to google AppScript
  fetch(getInTouchScriptURL, { method: 'POST', body: payload })
    .then(response => {
      if (response.ok) {

        // change text of button
        getInTouchButton.innerHTML = 'Submit';

        getInTouchMessage.style.display = 'block';
        // reset form fields
        getInTouchForm.reset();
        throw new Error('Network response was not ok.');
      } else {
      }
    })
    .catch(e => {
      // errorElement.style.display = 'block';
      // submitButton.innerHTML = 'Submit';
    })
});