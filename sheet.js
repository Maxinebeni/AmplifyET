const scriptURL = "https://script.google.com/macros/s/AKfycbzhhk2e5pV4FsRwSC-R92Qg4fF3o5CTzsXwJnIjWrxdtoCAovmWUa67Z9bNzlLnzIdY/exec";

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse JSON response
    })
    .then(data => {
      alert("Thank you! Your form is submitted successfully.");
      console.log(data); // Log the response data for debugging
      window.location.reload();
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert("There was a problem submitting your form. Please try again later.");
    });
});
