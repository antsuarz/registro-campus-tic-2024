API_URL = 'http://156.35.98.159:8080/'
checkAuthentication();

function checkAuthentication() {
    console.log("auth");
    fetch(API_URL+'authenticated', {
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
            paragraph1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend consequat interdum. Sed sed dolor vitae sem feugiat scelerisque. Nunc egestas mi odio, sit amet luctus mi euismod ac. Etiam ut dolor ex. Morbi varius diam eros, sit amet vulputate sem vulputate quis. Donec a nulla vitae purus sagittis vulputate. Aenean erat mauris, consectetur at scelerisque eu, faucibus ac eros.';
            adminSection.appendChild(paragraph1); 
            const paragraph2 = document.createElement('p');
            paragraph2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend consequat interdum. Sed sed dolor vitae sem feugiat scelerisque. Nunc egestas mi odio, sit amet luctus mi euismod ac. Etiam ut dolor ex. Morbi';
            adminSection.appendChild(paragraph2);
            return response.json(); 
        } else { 
            window.location.href = 'login.html'; 
        }
    })
}

document.getElementById('logout-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    fetch(API_URL+'logOut', {
        method: 'POST', 
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            window.location.href = 'index.html';
        } 
    })
});