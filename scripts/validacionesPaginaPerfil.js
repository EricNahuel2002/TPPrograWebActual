window.onload = function(){
    let nombreUsuario = document.getElementById("usuario");
    nombreUsuario.innerHTML = localStorage.getItem("nombreUsuario");
    document.getElementById("formulario").addEventListener("submit",function(event){
        let contrasenia = document.getElementById("contrasenia_nueva");
        let repetirContrasenia = document.getElementById("repetir_contrasenia");
        let metodosDePago = document.getElementsByName("Metodo_de_pago");
        let validarContrasenia = /^(?=(.*\d){2})(?=(.*[A-Za-z]){2})(?=(.*\W){2}).{8,}$/;
        if(!validarContrasenia.test(contrasenia.value) || !contrasenia.value){
            alert("La contraseña debe tener al menos 2 numeros, 2 letras y 2 caracteres especiales y 8 de longitud.");
            event.preventDefault();
        }
        if(repetirContrasenia.value !== contrasenia.value || !repetirContrasenia.value){
            alert("Las contraseñas no coinciden");
            event.preventDefault();
        }
        validarMetodoDePago(metodosDePago,event);
    });
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
                }
                validarNumerosDeTarjeta(campoTarjetaCredito,event);
                claveTarjetaValida(campoTarjetaCredito2,event);
                localStorage.setItem("metodoDePago",metodosDePago[i].id);
                localStorage.setItem("numeroTarjeta",campoTarjetaCredito.value);
                localStorage.setItem("claveTarjeta",campoTarjetaCredito2.value);
            }
            if(metodosDePago[i].id === "Cupon_de_pago"){
                let rapiPagoCheckbox = document.getElementById("rapi_pago");
                let pagoFacilCheckbox = document.getElementById("pago_facil");
                if(!rapiPagoCheckbox.checked && !pagoFacilCheckbox.checked){
                    alert("Elije un lugar donde pagar el cupon.");
                    event.preventDefault();
                }
                localStorage.setItem("metodoDePago",metodosDePago[i].id);
                if(rapiPagoCheckbox.checked){
                    localStorage.setItem("rapiPagoCheckbox",true);
                }else{
                    localStorage.setItem("rapiPagoCheckbox",false);
                }
                if(pagoFacilCheckbox.checked){
                    localStorage.setItem("pagoFacilCheckbox",true);
                }else{
                    localStorage.setItem("pagoFacilCheckbox",false);
                }
            }
            if(metodosDePago[i].id === "Transferencia_bancaria"){
                let campoTransferenciaBancaria = document.getElementById("transferencia_bancaria_nro");
                if(!campoTransferenciaBancaria.value){
                    alert("Rellena el campo de transferencia bancaria.");
                    event.preventDefault();
                }
                localStorage.setItem("metodoDePago",metodosDePago[i].id);
                localStorage.setItem("cbu",campoTransferenciaBancaria.value);
            }
        }
    }

    if(!radioChecked){
        alert("Elije un metodo de pago.");
        event.preventDefault();
    }
}