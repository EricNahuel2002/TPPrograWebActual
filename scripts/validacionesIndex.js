    let botonCerrarSesion = document.getElementById("cerrar_sesion");
    let nombreUsuario = localStorage.getItem("nombreUsuario");
    if(nombreUsuario === null || nombreUsuario === ""){
        botonCerrarSesion.style.display = "none";
    }else{
    botonCerrarSesion.addEventListener("click",function(){
    localStorage.clear();
    });
}



var contenidoCompleto = [{
        "Titulo": "shrek",
		"Formato": "Pelicula",
		"Genero": "Comedia",
		"Poster": "assets/images/Shrek.webp"
},
{
    "Titulo": "peaky blinders",
		"Formato": "Serie",
		"Genero": "Drama",
		"Poster": "assets/images/Peaky blinders.jpg"
},
{
    "Titulo": "merli",
		"Formato": "Serie",
		"Genero": "Comedia",
		"Poster": "assets/images/Merli.webp"
},
{
    "Titulo": "maverick",
		"Formato": "Pelicula",
		"Genero": "Accion",
		"Poster": "assets/images/Maverick.webp"
},
{
    "Titulo": "friends",
		"Formato": "Serie",
		"Genero": "Comedia",
		"Poster": "assets/images/Friends.jpg"
},
{
    "Titulo": "rampage",
		"Formato": "Pelicula",
		"Genero": "Accion",
		"Poster": "assets/images/Rampage.webp"
},
{
    "Titulo": "elite",
		"Formato": "Pelicula",
		"Genero": "Drama",
		"Poster": "assets/images/Elite.jpeg"
},
{
    "Titulo": "y donde estan las rubias",
		"Formato": "Pelicula",
		"Genero": "Comedia",
		"Poster": "assets/images/Y_donde_estan_las_rubias.webp"
},
{
    "Titulo": "harry potter",
		"Formato": "Pelicula",
		"Genero": "Fantasia",
		"Poster": "assets/images/harry-potter.webp"
},
{
    "Titulo": "el encargado",
		"Formato": "Serie",
		"Genero": "Drama",
		"Poster": "assets/images/El_Encargado.avif"
},
{
    "Titulo": "el especialista",
		"Formato": "Pelicula",
		"Genero": "Accion",
		"Poster": "assets/images/El especialista.jpeg"
},
]


var seccionContenido = document.getElementById("contenido");


contenidoCompleto.forEach((IContenido) => {
    seccionContenido.innerHTML += `
        <a href="pages/detalle_pelicula.html" class="link_imagen">
            <img src="${IContenido.Poster}" alt="${IContenido.Titulo}">
            <p>${IContenido.Titulo}</p>
        </a>
    `
});


let buscador = document.getElementById("buscador");

    buscador.addEventListener("keyup",function(){
        //1. guardar el valor del buscador
        let valorBuscador = buscador.value.toLowerCase().trim();
        //2. filtrar el array de cursos (los que contienen 'valorFiltro')
        let contenidosFiltrados = contenidoCompleto.filter(contenido => contenido.Titulo.indexOf(valorBuscador) > -1);
        //3. limpiar resultados (para evitar que se acumule tras varias búsquedas)
        seccionContenido.innerHTML = "";
        //4. completar resultados con los cursos filtrados
        contenidosFiltrados.forEach((IContenido) => {
            seccionContenido.innerHTML += `
                                <a href="pages/detalle_pelicula.html" class="link_imagen">
                                    <img src="${IContenido.Poster}" alt="${IContenido.Titulo}">
                                    <p>${IContenido.Titulo}</p>
                                </a>
                            `
        });
    })