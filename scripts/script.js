// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Basic validation and alert
    if (name && email && message) {
      alert("Thank you for reaching out! We will get back to you soon.");
      this.reset(); // Reset the form
    } else {
      alert("Please fill out all fields.");
    }
  });
  