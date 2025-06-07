function submitForm(event) {
    event.preventDefault(); // Prevent the form from reloading the page
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear any previous results

    // Gather the data from the form fields
    const data = {
        Name: document.getElementById('name').value,
        Email: document.getElementById('email').value,
        Phone: document.getElementById('phone').value || 'Not provided',
        Semester: document.getElementById('semester').value || 'Not selected',
        Branch: document.getElementById('branch').value || 'Not selected',
        Website: document.getElementById('website').value || 'Not provided'
    };

    // Create and append a new paragraph for each piece of data
    for (const [key, value] of Object.entries(data)) {
        const p = document.createElement('p');
        p.textContent = `${key}: ${value}`; // Safely set the text content
        resultDiv.appendChild(p);
    }
} 