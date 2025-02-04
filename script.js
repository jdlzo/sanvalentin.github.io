let btnSi = document.getElementById("btn-si");
let btnNo = document.getElementById("btn-no");
let mensaje = document.getElementById("mensaje");

let tamañoSi = 18; 

function agrandarSi() {
    mensaje.style.display = "block"; 
    btnSi.style.display = "none"; 
    btnNo.style.display = "none"; 
}

function agrandarBotonSi() {
    tamañoSi += 5;

    btnSi.style.fontSize = tamañoSi + "px"; 
}
function reducirBotonNo(){
    tamañoNo -=3

    btnNo.style.fontsize = tamañoNo - "px";
}
document.addEventListener("click", function () {
    if (musica.muted) {
        musica.muted = false;
        musica.play();
    }
});

