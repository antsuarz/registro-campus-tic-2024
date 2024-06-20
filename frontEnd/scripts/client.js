const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const loginRequest = {
        username: username,
        password: password
    };

    console.log(loginRequest);

    fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginRequest)
    })
    .then(response => {
        if (response.ok) {
            window.location.href = 'admin.html'; 
        } else {
            throw new Error('Login failed');
        }
    })
    .then(data => {
        console.log('Success:', data);
        alert(data);
    })
    .catch((error) => {
        console.error('Error:', error);
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.style.display = 'block';
        errorMessage.textContent = error.message;
    });
});
