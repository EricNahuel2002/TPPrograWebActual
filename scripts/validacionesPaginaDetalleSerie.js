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