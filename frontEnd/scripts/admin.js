
checkAuthentication();

function checkAuthentication() {
    console.log("auth");
    fetch('http://156.35.98.159:8080/authenticated', {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log(response);
        if (response.ok) { 
            document.getElementById('admin-title').textContent = 'Pantalla de Admin';
            const adminSection = document.getElementById('admin-section');
            adminSection.innerHTML = ''; 
            const paragraph1 = document.createElement('p');
            paragraph1.textContent = 'Este es un párrafo dinámico agregado cuando está autenticado.';
            adminSection.appendChild(paragraph1); 
            const paragraph2 = document.createElement('p');
            paragraph2.textContent = 'Otro párrafo dinámico para demostrar la funcionalidad.';
            adminSection.appendChild(paragraph2);
            return response.json(); 
        } else { 
            window.location.href = 'login.html'; 
        }
    })
}

