window.onload = function(){
    document.getElementById("formulario").addEventListener("submit",function(event){
        let nombre = document.getElementById("nombre");
        let apellido = document.getElementById("apellido");
        let email = document.getElementById("email");
        let usuario = document.getElementById("nombre_usuario");
        let contrasenia = document.getElementById("contrasenia");
        let repetirContrasenia = document.getElementById("repetir_contrasenia");
        let metodosDePago = document.getElementsByName("Metodo_de_pago");


        let validarNombre = /^[A-Za-z]+$/;

        if(!validarNombre.test(nombre.value) || !nombre.value){
            alert("Solo se admiten letras en tu nombre o esta vacio.");
            event.preventDefault();
        }

        let validarApellido = /^[A-Za-z]+$/;
        if(!validarApellido.test(apellido.value) || !apellido.value){
            alert("Solo se admiten letras en tu apellido o esta vacio.");
            event.preventDefault();
        }

        validarEmail(email,event);

        let validarUsuario = /^[A-Za-z\d]+$/;
        if(!validarUsuario.test(usuario.value) || !usuario.value){
            alert("Error en nombre de usuario.");
            event.preventDefault();
        }

        let validarContrasenia = /^(?=(.*[A-Za-z]){2})(?=(.*\d){2})(?=(.*\W){2}).{8,}$/;
        if(!validarContrasenia.test(contrasenia.value) || !contrasenia.value){
            alert("Error en contraseña");
            event.preventDefault();
        }

        if(repetirContrasenia.value != contrasenia.value || !repetirContrasenia.value){
            alert("Error en repetir contraseña");
            event.preventDefault();
        }

        validarMetodoDePago(metodosDePago,event);
    });
}

function validarEmail(email,event){
    let validarEmail = /^(.+\@.+\..+)$/;
    if(!validarEmail.test(email.value) || !email.value){
        alert("Error en mail, intentalo de nuevo.");
        event.preventDefault();
    };
}

function validarNumerosDeTarjeta(campoTarjetaCredito,event){
    let regExpCampoTarjetaCredito = /^\d{16,19}$/;
                if(regExpCampoTarjetaCredito.test(campoTarjetaCredito.value)){
                    let sumatoria = 0;
                    let ultimoNumero = 0;
                    for(let i = 0; i < campoTarjetaCredito.value.length -1; i++){
                        sumatoria += parseInt(campoTarjetaCredito.value[i]);
                        ultimoNumero = parseInt(campoTarjetaCredito.value[i+1]);
                    }
                    if(sumatoria % 2 == 0){
                        if(ultimoNumero % 2 == 0){
                        alert("El ultimo numero de la tarjeta debe ser impar");
                        event.preventDefault();
                        }
                    }
                    if(sumatoria % 2 != 0){
                        if(ultimoNumero % 2 != 0){
                        alert("El ultimo numero de la tarjeta debe ser par");
                        event.preventDefault();
                        }
                    }
                }else {
                    alert("La tarjeta debe tener entre 16 y 19 digitos");
                    event.preventDefault();
                }
}

function claveTarjetaValida(campoTarjetaCredito2,event){
    if(campoTarjetaCredito2.value.length === 3){
    let validarQueLosTresDigitosSeanDistintosDeCero = /^(?!000)\d{3}$/;
    if(!validarQueLosTresDigitosSeanDistintosDeCero.test(campoTarjetaCredito2.value)){
        alert("La clave no puede ser tres ceros");
        event.preventDefault();
    }
    }else{
        alert("La clave debe ser exactamente de 3 digitos");
        event.preventDefault();
    }
}

function validarMetodoDePago(metodosDePago,event){
    let radiosInput = document.getElementsByName("metodo_input");
    let radioChecked = false;
    let inputVacio = false;
    let inputConError = false;
    for(let i in metodosDePago){
        if(metodosDePago[i].checked){
            radioChecked = true;
            if(metodosDePago[i].id === "Mercado_pago"){
                let campoTarjetaCredito = document.getElementById("tarjeta_de_credito_input");
                let campoTarjetaCredito2 = document.getElementById("tarjeta_de_credito_input2");
                if(!campoTarjetaCredito.value || !campoTarjetaCredito2.value){
                    alert("Rellena los campos de Tarjeta de credito.")
                    event.preventDefault();
                    break;
                }
                validarNumerosDeTarjeta(campoTarjetaCredito,event);
                claveTarjetaValida(campoTarjetaCredito2,event);
                break;
            }
            if(metodosDePago[i].id === "Cupon_de_pago"){
                let rapiPagoCheckbox = document.getElementById("rapi_pago");
                let pagoFacilCheckbox = document.getElementById("pago_facil");
                if(!rapiPagoCheckbox.checked && !pagoFacilCheckbox.checked){
                    alert("Elije un lugar donde pagar el cupon.");
                    event.preventDefault();
                }
                break;
            }
            if(metodosDePago[i].id === "Transferencia_bancaria"){
                let campoTransferenciaBancaria = document.getElementById("transferencia_bancaria_nro");
                if(!campoTransferenciaBancaria.value){
                    alert("Rellena el campo de transferencia bancaria.");
                    event.preventDefault();
                }
                break;
            }
        }
    }

    if(!radioChecked){
        alert("Elije un metodo de pago.");
        event.preventDefault();
    }
}

