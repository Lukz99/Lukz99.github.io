const catalogoHombres   = document.querySelector("#hombres");
const catalogoMujeres   = document.querySelector("#mujeres");
const catalogo          = document.querySelector("#catalogo");
const menuCatalogo      = document.querySelector("#menu-desplegable-catalogo");
const mostrarCatalogoHombre = document.querySelector("#catalogo-hombres");
const mostrarCatalogoMujer = document.querySelector("#catalogo-mujeres");
var mostrarCatalogo     = "";
var menuAbierto = false;
var ultimoClicCatalogo = 0;

/* *********** MENU CATALOGO DESPLEGABLE ************ */


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



/* ******************* SELECTOR DE CATALOGO ******************* */


function setCatalog(genero) {
    console.log("genero:", genero);    
    if (genero == "hombres") {
        console.log("click hombres")
      mostrarCatalogoHombre.style.left = "50%";
      mostrarCatalogoMujer.style.left = "0%";
    } else if (genero == "mujeres") {
        console.log("click mujerse")
        mostrarCatalogoHombre.style.left = "0%";
        mostrarCatalogoMujer.style.left = "50%";
        console.log("click mujerse")
    }
    console.log("Catalog Type:", catalogType);
  }