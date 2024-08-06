// contactSubmitted
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve contactData from local storage
    const storedContactData = sessionStorage.getItem('contactData');
    if (storedContactData) {
        const contactData = JSON.parse(storedContactData);
        // Display contact data on the page
        const contactDataDisplay = document.getElementById('contactDataDisplay');
        contactDataDisplay.innerHTML = `
            <p>Name:
                <span class="color-light-blue">${contactData.name}</span>
            </p>
            <p>Email:
                <span class="color-light-blue">${contactData.email}</span>
            </p>
            <p>Phone:
                <span class="color-light-blue">${contactData.phone}</span>
            </p>
            <p>Message:
                <span class="color-light-blue">${contactData.message}</span>
            </p>
        `;
    } else {
        console.error('Contact Form Data not found in session storage.');
    }

    // Optional: Clear local storage after retrieving contactData
    localStorage.removeItem('contactData');
});