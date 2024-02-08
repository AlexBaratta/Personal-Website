(function () {
  emailjs.init(emailjsConfig.userID);

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      let formDataObj = {};

      const formData = new FormData(this);

      formDataObj['g-recaptcha-response'] = this.querySelector('.g-recaptcha-response').value;


      for (let [key, value] of formData.entries()) {
        formDataObj[key] = value;
      }

      console.log(formDataObj);

      emailjs
        .send(emailjsConfig.serviceID, emailjsConfig.templateID, formDataObj)
        .then(
          function (response) {
            console.log("Email sent successfully:", response);

            alert("Thank you for contacting me! I will get back to you soon.");

            document.getElementById("contact-form").reset();
          },
          function (error) {
            console.error("Email sending failed:", error);

            alert("Oops! Something went wrong. Please try again later.");
          }
        );
    });
})();
