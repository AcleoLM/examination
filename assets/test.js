document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Add logic to handle form submission (e.g., sending a message to Sheila)
    // You can use AJAX, Fetch API, or any other method to handle form submission.
    // For simplicity, you can log the form data to the console.
  
    const formData = new FormData(event.target);
  
    for (const [name, value] of formData) {
      console.log(`${name}: ${value}`);
    }
  
    // Clear the form after submission (optional)
    event.target.reset();
  });
  