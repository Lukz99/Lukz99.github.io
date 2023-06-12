/* **************** SLIDER ****************** */

const slider            = document.querySelector("#slider");
const btnLeft           = document.querySelector(".slider__btn-left");
const btnRight          = document.querySelector(".slider__btn-right");
var sliderSection       = document.querySelectorAll(".slider__section");
var sliderSectionLast   = sliderSection[sliderSection.length - 1];
var imagenActual        = 1;
slider.insertAdjacentElement("afterbegin", sliderSectionLast);


function proximaImagen() {
    var sliderSection       = document.querySelectorAll(".slider__section");
    var sliderSectionFirst  = sliderSection[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 1s";

    setTimeout(()=>{
        slider.style.transition = "none"
        slider.style.marginLeft = "-100%";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    }, 1000);

    switch (imagenActual) {
        case 1:
            imagenActual++;
            break;
        case 2:
            imagenActual++;
            break;
        case 3:
            imagenActual++;
            break;
        case 4:
            imagenActual = 1;
            break;
    }
    return imagenActual;
}

function anteriorImagen() {
    var sliderSection       = document.querySelectorAll(".slider__section");
    var sliderSectionLast   = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 1s";

    setTimeout(()=>{
        slider.style.transition = "none";
        slider.style.marginLeft = "-100%";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    }, 1000);

    switch (imagenActual) {
        case 1:
            imagenActual = 4;
            break;
        case 2:
            imagenActual--;
            break;
        case 3:
            imagenActual--;
            break;
        case 4:
            imagenActual--;
            break;
    }
    return imagenActual;
}

btnRight.addEventListener("click", proximaImagenEspera);


btnLeft.addEventListener("click", anteriorImagenEspera);

/* ********************* TIEMPO DE ESPERA *************** */

let ultimoClic = 0;

function proximaImagenEspera() {
  const ahora = Date.now();
  if (ahora - ultimoClic > 1000) {
    proximaImagen();
    ultimoClic = ahora;
  }   
}

function anteriorImagenEspera() {
    const ahora = Date.now();
    if (ahora - ultimoClic > 1000) {
      anteriorImagen();
      ultimoClic = ahora;
    }     
}

/* ************************** AUTO SLIDER ************************ */

var imagen = document.querySelector(".container-slider");
var intervalID = setInterval(proximaImagen, 3000);

imagen.addEventListener('mouseover', () => {
    clearInterval(intervalID);
});

imagen.addEventListener('mouseout', () => {
    intervalID = setInterval(proximaImagen, 3000);
});




/* ************************** SELECTOR DE IMAGEN ************************ */


const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");


btn1.addEventListener("click", () => {
    
});

btn2.addEventListener("click", () => {
    activarSlider(2)
});

btn3.addEventListener("click", () => {
    activarSlider(3)
});

btn4.addEventListener("click", () => {
    activarSlider(4)
});

function activarSlider(imagenActual) {
    setInterval(cambiarImagen(imagenActual), 2000);
}

function cambiarImagen(imagenActual) {
    switch (imagenActual){
        case 1:
            btn2.addEventListener("click");

    }
}

setInterval(siguienteImagen, 2000);

