// contactStart
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // To prevent the default contact form submission
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Create an object to store the contact form data
    const contactData = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    // Log contact data to console
    console.log('Contact Form Data:', contactData);
    sessionStorage.setItem('contactData', JSON.stringify(contactData))
    window.location.href = 'contact_submitted.html';
});