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
        let contrasenia = document.getElementById("contraseña");
        let error = false;
        form_correcto = validarEmail(email);
        form_correcto = validarContrasenia(contrasenia);
        if(!error){
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
        let error = false;
        form_correcto = validarEmail(email);
        if(!usuario.value){
            alert("Pone tu usuario.")
            error = true;
        }
        if(!error){
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
        let usuario = document.getElementById("nombre_usuario");
        let contrasenia = document.getElementById("contrasenia");
        let repetirContrasenia = document.getElementById("repetir_contrasenia");
        let metodosDePago = document.getElementsByName("Metodo_de_pago");

        let error = false;

        let validarNombre = /^[A-Za-z]+$/;

        if(!validarNombre.test(nombre.value) || !nombre.value){
            alert("Solo se admiten letras en tu nombre o esta vacio.")
        }

        let validarApellido = /^[A-Za-z]+$/;
        if(!validarApellido.test(apellido.value) || !apellido.value){
            alert("Solo se admiten letras en tu apellido o esta vacio.")
            error = true;
        }

        formulario_correcto = validarEmail(email);

        let validarUsuario = /^[A-Za-z\d]+$/;
        if(!validarUsuario.test(usuario.value) || !usuario.value){
            alert("Error en nombre de usuario.")
            error = true;
        }

        let validarContrasenia = /^(?=(.*[A-Za-z]){2})(?=(.*\d){2})(?=(.*\W){2}).{8,}$/;
        if(!validarContrasenia.test(contrasenia.value) || !contrasenia.value){
            alert("Error en contraseña");
            error = true;
        }

        if(repetirContrasenia.value != contrasenia.value || !repetirContrasenia.value){
            alert("Error en repetir contraseña");
        }

        error = validarMetodoDePago(metodosDePago);

        if(!error){
            formulario.submit();
        }
    }
}

function validarMetodoDePago(metodosDePago){
    let radiosInput = document.getElementsByName("metodo_input");
    let radioChecked = false;
    let inputVacio = false;
    for(let i in metodosDePago){
        if(metodosDePago[i].checked){
            radioChecked = true;
            if(metodosDePago[i].id === "Mercado_pago"){
                let campoMercadoPago = document.getElementById("Mercado_pago_input");
                if(!campoMercadoPago.value){
                    alert("Rellena el campo de Mercado Pago.")
                    inputVacio = true;
                }
                break;
            }
            if(metodosDePago[i].id === "Cupon_de_pago"){
                let rapiPagoCheckbox = document.getElementById("rapi_pago");
                let pagoFacilCheckbox = document.getElementById("pago_facil");
                if(!rapiPagoCheckbox.checked && !pagoFacilCheckbox.checked){
                    alert("Elije un lugar donde pagar el cupon.")
                }
                break;
            }
            if(metodosDePago[i].id === "Transferencia_bancaria"){
                let campoTransferenciaBancaria = document.getElementById("transferencia_bancaria_nro");
                if(!campoTransferenciaBancaria.value){
                    inputVacio = true;
                    alert("Rellena el campo de transferencia bancaria.");
                }
                break;
            }
        }
    }

    if(!radioChecked){
        alert("Elije un metodo de pago.");
        return true;
    }
    if(radioChecked && inputVacio){
        return true;
    }
    return false;
}

function validarEmail(email){
    let validarEmail = /^(.+\@.+\..+)$/;
    if(!validarEmail.test(email.value) || !email.value){
        alert("Error en mail, intentalo de nuevo.");
        return true;
    }
    return false;
}

function validarContrasenia(contrasenia){
        if(!contrasenia.value){
            alert("Error en contraseña");
            return true;
        }
        return false;
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






