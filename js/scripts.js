let url = "https://api.github.com/users/"
let buscarUsuario;
let infoUsuario = document.getElementById("infoUsuario");

function recuperarNombre() {
    buscarUsuario = document.getElementById("nombreUsuario").value;
    getUsers(buscarUsuario);
}

function getUsers(names) {
    fetch(url + names)
        .then(response => response.json())
        .then(data => {
            if (data.login) {
                infoUsuario.innerHTML = ("Nombre de usuario: " + data.login +
                    "<br/>Nombre: " + data.name +
                    "<br/>Avatar:<br/> " + "<img src='" + data.avatar_url + " ' style='width: 100px; height: 100px;'/>" +
                    "<br/>Perfil: <a href='" + data.html_url + "'>" + data.html_url + "</a>" +
                    "<br/>Cantidad de Repositorios Publicos: " + data.public_repos)
            } else {
                infoUsuario.innerHTML = ("Usuario no encontrado");
            }
        }
        )
        .catch(err =>
            console.log(err)
        );
}