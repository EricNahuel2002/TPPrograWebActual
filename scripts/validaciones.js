function getPaginaActual(){
    const path = document.location.pathname;
    const pagina = path.split("/").pop();
    return pagina;
}

function paginaLogin(){
    window.onload = function(){
        document.getElementById("formulario").addEventListener("submit",function(event){
            let email = document.getElementById("email");
            let contrasenia = document.getElementById("contraseña");
            validarEmail(email,event);
            validarContrasenia(contrasenia,event);
        });
    }
}

function paginaRecuperarContraseña(){
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
}


function paginaRegistroUsuario(){
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
    
            formulario_correcto = validarEmail(email);
    
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
    }


    function paginaPerfil(){
        window.onload = function(){
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
    }

    function paginaDetalleSerie(){
            let temporada1 = ["1","2","3","4","5"];
            let temporada2 = ["1","2","3"];
            let temporada3 = ["1"];
            let temporadas = document.getElementById("temporadas");
            let capitulos = document.getElementById("capitulos");
            temporadas.addEventListener("change",function(){
                capitulos.innerHTML = "";
                switch(temporadas.value){
                    case "1":
                        for(i in temporada1){
                            //creo nodeElement
                            let option = document.createElement("option");
                            // al nodeElement se le agrega el value
                            option.value = i;
                            //creo textNode
                            let texto = document.createTextNode(temporada1[i]);
                            //appendChild1
                            option.appendChild(texto);
                            //appendChild2
                            capitulos.appendChild(option);
                        }
                    break;
                    case "2":
                        for(i in temporada2){
                            //creo el nodeelement
                            let option = document.createElement("option");
                            //le doy un valor al nodeelement
                            option.value = i;
                            //creo el nodetext
                            let texto = document.createTextNode(temporada2[i]);
                            //appendchild del nodetext al nodelement
                            option.appendChild(texto);
                            //appendchild del nodeelement al select 
                            capitulos.appendChild(option);
                        }
                    break;
                    case "3":
                        for(i in temporada3){
                            let option = document.createElement("option");
                            //le doy un valor al nodeelement
                            option.value = i;
                            //creo el nodetext
                            let texto = document.createTextNode(temporada2[i]);
                            //appendchild del nodetext al nodelement
                            option.appendChild(texto);
                            //appendchild del nodeelement al select 
                            capitulos.appendChild(option);
                        }
                    break;
                }
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

function validarEmail(email,event){
    let validarEmail = /^(.+\@.+\..+)$/;
    if(!validarEmail.test(email.value) || !email.value){
        alert("Error en mail, intentalo de nuevo.");
        event.preventDefault();
    };
}

function validarContrasenia(contrasenia,event){
        if(!contrasenia.value){
            alert("Error en contraseña");
            event.preventDefault();
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
if(paginaActual == "perfil.html"){
    paginaPerfil();
}
if(paginaActual == "detalle_serie.html"){
    paginaDetalleSerie();
}
if(paginaActual == "index.html"){
    paginaIndex();
}






