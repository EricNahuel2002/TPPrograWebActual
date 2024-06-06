function getPaginaActual(){
    const path = document.location.pathname;
    const pagina = path.split("/").pop();
    return pagina;
}

function paginaLogin(){
    window.onload = function(){
        var enviar = document.getElementById("enviar");
        enviar.onclick = validarCampos;
    }
    
    function validarCampos(){
        let formulario = document.getElementById("formulario");
        let email = document.getElementById("email");
        let contraseña = document.getElementById("contraseña");
        let form_correcto = true;
        let validarEmail = /^(.+\@.+\..+)$/;
    
        if(!validarEmail.test(email.value) || !email.value){
            alert("Error en mail, intentalo de nuevo.");
            form_correcto = false;
        }
    
        let validarContraseña = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
        if(!validarContraseña.test(contraseña.value) || !contraseña.value){
            alert("Contraseña no valida, al menos 1 caracter o 1 numero y un largo minimo de 8");
            form_correcto = false;
        }
    
        if(form_correcto){
            formulario.submit();
        }
    }
}

function paginaRecuperarContraseña(){
    window.onload = function(){
        botonEnviar = document.getElementById("enviar");
        botonEnviar.onclick = validarCampos;
    }

    function validarCampos(){
        let formulario = document.getElementById("formulario");
        let email = document.getElementById("email");
        let usuario = document.getElementById("nombre_usuario");
        let formularioCorrecto = true;

        let validarEmail = /^(.+\@.+\..+)$/;

        if(!validarEmail.test(email.value) || !email.value){
            alert("Error en email, intenta de nuevo.")
            formularioCorrecto = false;
        }

        if(!usuario.value){
            alert("Pone tu usuario.")
            formularioCorrecto = false;
        }


        if(formularioCorrecto){
            formulario.submit();
        }
    }
}


function paginaRegistroUsuario(){
    window.onload = function(){
        var enviar = document.getElementById("enviar");
        enviar.onclick = validarCampos;
    }

    function validarCampos(){
        let formulario = document.getElementById("formulario");
        let nombre = document.getElementById("nombre");
        let apellido = document.getElementById("apellido");
        let email = document.getElementById("email");

        let validarNombre = /^[A-Za-z]+$/;

        if(!validarNombre.test(nombre.value) || !nombre.value){
            alert("Solo se admiten letras en tu nombre o esta vacio.")
        }

        let validarApellido = /^[A-Za-z]+$/;
        if(!validarApellido.test(apellido.value) || !apellido.value){
            alert("Solo se admiten letras en tu apellido o esta vacio.")
        }
    }
}

const paginaActual = getPaginaActual();

if(paginaActual == "login.html"){
    paginaLogin();
}
if(paginaActual == "recuperar_contrasenia.html"){
    paginaRecuperarContraseña();
}
if(paginaActual == "registro_usuario.html"){
    paginaRegistroUsuario();
}






