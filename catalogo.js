const catalogoHombres = document.querySelector("#hombres");
const catalogoMujeres = document.querySelector("#mujeres");
const catalogo = document.querySelector("#catalogo");
const menuCatalogo = document.querySelector("#menu-desplegable-catalogo");


var menuAbierto = false;


let ultimoClicCatalogo = 0;

function desplegarMenuEspera(espera, menuAbierto) {
  const ahora = Date.now();
  if (ahora - ultimoClicCatalogo > espera) {
    let menuAbiertoFinal = desplegarMenu(menuAbierto);
    ultimoClicCatalogo = ahora;
    return menuAbiertoFinal;
  }   
  return menuAbierto;
}

function desplegarMenu(menuAbierto) {
    if (menuAbierto) { // lo ciero                      
        menuCatalogo.style.opacity = "0";
        setTimeout(()=> {
            catalogoHombres.style.top = "-30em";
            catalogoMujeres.style.top = "-30em";
        },800)
    } else { // lo abro                               
        catalogoHombres.style.top = "0em";
        catalogoMujeres.style.top = "3.2em";
        setTimeout(()=> {
            menuCatalogo.style.opacity = "1";
        },250)
    }
    menuAbierto = !menuAbierto;
    return menuAbierto;
}


catalogo.addEventListener("click", () => {
    menuAbierto = desplegarMenuEspera(800, menuAbierto);
});