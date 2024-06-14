let colores=["azul","verde","amarillo"];
let paises=["Argentina","Brazil","Uruguay"];
let universidades=["UBA", "UNLAM", "UNSAM"];

let inicial=document.querySelector("#temporadas");
let secundario=document.querySelector("#capitulos");

inicial.addEventListener("change",()=>{
    secundario.innerHTML="";
    switch(inicial.value){
        case "1":
				// recorrer el array colores
				for (let i in colores){
                    //crear un nodo de tipo elemento option
                    let option=document.createElement("option");
				
                    //al option le agregamos un value
                    option.value=i;
                
                    //crear un nodo de tipo texto
                    let texto=document.createTextNode(colores[i]);
                
                    //al option agregarle el text node
                    option.appendChild(texto);
                
                    //al select secundario, agregarle el option
                    secundario.appendChild(option);
                }
        break;
        case "2":
            	// recorrer el array paises
				for (let i in paises){
                    //crear un nodo de tipo elemento option
                    let option=document.createElement("option");
				
                    //al option le agregamos un value
                    option.value=i;
                
                    //crear un nodo de tipo texto
                    let texto=document.createTextNode(paises[i]);
                
                    //al option agregarle el text node
                    option.appendChild(texto);
                
                    //al select secundario, agregarle el option
                    secundario.appendChild(option);
                }
        break;
        case "3":
                // recorrer el array paises
				for (let i in universidades){
                    //crear un nodo de tipo elemento option
                    let option=document.createElement("option");
				
                    //al option le agregamos un value
                    option.value=i;
                
                    //crear un nodo de tipo texto
                    let texto=document.createTextNode(universidades[i]);
                
                    //al option agregarle el text node
                    option.appendChild(texto);
                
                    //al select secundario, agregarle el option
                    secundario.appendChild(option);
                }
    
        break;
        default:
            
        break;
    }
});