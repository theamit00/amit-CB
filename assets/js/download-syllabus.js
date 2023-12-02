
// elements ==
const form = document.forms['download-syllabus-form'];
const submitButton = document.getElementById('download-syllabus-submit-button');
const closeModalButton = document.getElementById('download-syllabus-close-modal-button');
const errorElement = document.getElementById('download-syllabus-error-alert');
const triggerButton = document.getElementById('donwload-syllabus-trigger-button');

const scriptURL = 'https://script.google.com/macros/s/AKfycbzyrVhfnOX8KH8IaZs8M6LA1B9EvVTA0t5TkYOV7LDTD7wp9Szr3_EOUwk8epjiEkA/exec';

form.addEventListener('submit', (e) => {
  
  // prevent default form action
  e.preventDefault();

  // change submit button text to Submitting...
  submitButton.innerHTML = 'Submitting...';

  // add URL to formData
  const payload = new FormData(form);
  const paths = window.location.pathname.split('/');
  payload.append('Course', paths[paths.length - 1].slice(0, -5));
  
  // send request to google AppScript
  fetch(scriptURL, { method: 'POST', body: payload })
    .then(response => {
      if (response.ok) {

        // close Modal
        closeModalButton.click();

        // reset form fields
        form.reset();

        // change text of button
        submitButton.innerHTML = 'Submit';

        // redirect to syllabus url (accessed from data-syllabus-url attribute)
        window.location.href = triggerButton.dataset.syllabusUrl;

      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch(e => {
      errorElement.style.display = 'block';
      submitButton.innerHTML = 'Submit';
    })
});