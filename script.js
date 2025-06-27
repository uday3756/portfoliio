console.log("AI Creative Unveiled portfolio loaded.");

// Optional: CTA smooth scroll or alert
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".cta");
  if (button) button.onclick = () => alert("Thanks for reaching out!");
});
<!-- Load EmailJS -->
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
  (function(){
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
  })();

  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      };

      emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
        .then(() => {
          alert("Message sent! I'll get back to you soon.");
          contactForm.reset();
        })
        .catch((error) => {
          console.error("Send failed:", error);
          alert("Failed to send message. Try again later.");
        });
    });
  });
</script>
