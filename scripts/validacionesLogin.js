window.onload = function(){
    document.getElementById("formulario").addEventListener("submit",function(event){
        let usuario = document.getElementById("usuario");
        if(!usuario.value){
            alert("Ingresa tu usuario");
            event.preventDefault();
        }
        let contrasenia = document.getElementById("contraseña");
        validarContrasenia(contrasenia,event);
        localStorage.setItem("nombreUsuario",usuario.value);
    });
}



function validarContrasenia(contrasenia,event){
        if(!contrasenia.value){
            alert("Error en contraseña");
            event.preventDefault();
        }
}