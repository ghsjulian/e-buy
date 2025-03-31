document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0]; // Get the selected file

    if (file) {
        const formData = new FormData();
        formData.append('file', file); // Append the file to the FormData object

        // Send the file to the backend server
        fetch('https://your-backend-api.com/upload', { // Replace with your API endpoint
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server
            document.getElementById('response').innerText = 'File uploaded successfully: ' + data.message;
        })
        .catch(error => {
            console.error('Error uploading file:', error);
            document.getElementById('response').innerText = 'Error uploading file.';
        });
    } else {
        alert('Please select a file to upload.');
    }
});