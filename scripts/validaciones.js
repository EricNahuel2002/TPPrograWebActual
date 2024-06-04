function getPaginaActual(){
    const path = window.location.pathname;
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

const paginaActual = getPaginaActual();

if(paginaActual == "login.html"){
    paginaLogin();
}





