window.onload = function(){
    document.getElementById("formulario").addEventListener("submit",function(event){
        let email = document.getElementById("email");
        let usuario = document.getElementById("nombre_usuario");
        validarEmail(email,event);
        if(!usuario.value){
            alert("Pone tu usuario.");
            event.preventDefault();
        }
    });
}

function validarEmail(email,event){
    let validarEmail = /^(.+\@.+\..+)$/;
    if(!validarEmail.test(email.value) || !email.value){
        alert("Error en mail, intentalo de nuevo.");
        event.preventDefault();
    };
}