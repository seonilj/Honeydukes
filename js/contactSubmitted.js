// contactSubmitted
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve contactData from local storage
    const storedContactData = sessionStorage.getItem('contactData');
    if (storedContactData) {
        const contactData = JSON.parse(storedContactData);
        // Display contact data on the page
        const contactDataDisplay = document.getElementById('contactDataDisplay');
        contactDataDisplay.innerHTML = `
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Phone Number:</strong> ${contactData.phone}</p>
            <p><strong>Message:</strong> ${contactData.message}</p>
        `;
    } else {
        console.error('Contact Form Data not found in session storage.');
    }

    // Optional: Clear local storage after retrieving contactData
    localStorage.removeItem('contactData');
});