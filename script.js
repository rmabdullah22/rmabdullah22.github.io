document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const country = document.getElementById('country').value.trim();
    const comments = document.getElementById('comments').value.trim();

    if (name === "" || email === "" || country === "" || comments === "") {
        alert("All fields must be filled in before submission.");
    } else {
        alert("Form submitted successfully! Thank you, " + name + ".");
        
        this.reset();
    }
});
