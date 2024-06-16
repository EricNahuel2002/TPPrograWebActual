function getPaginaActual(){
    const path = document.location.pathname;
    const pagina = path.split("/").pop();
    return pagina;
}

function paginaLogin(){
    
}

function paginaRecuperarContraseña(){
    
}


function paginaRegistroUsuario(){
    
    }


    function paginaPerfil(){
        
    }

    function paginaDetalleSerie(){
            
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






