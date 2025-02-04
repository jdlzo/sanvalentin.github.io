let btnSi = document.getElementById("btn-si");
let btnNo = document.getElementById("btn-no");
let mensaje = document.getElementById("mensaje");
let musica = document.getElementById("musicaFondo");

let tamañoSi = 18; 
let tamañoNo = 18; 

btnSi.addEventListener("click", function () {
    mensaje.style.display = "block"; 
    btnSi.style.display = "none"; 
    btnNo.style.display = "none"; 

    // Reproducir la música al hacer clic en "Sí"
    musica.play()
        .then(() => console.log("Música reproduciéndose"))
        .catch(error => console.error("Error al reproducir música:", error));
});

btnNo.addEventListener("click", function () {
    tamañoSi += 5;
    btnSi.style.fontSize = tamañoSi + "px"; 

    tamañoNo -= 3;
    if (tamañoNo > 5) {
        btnNo.style.fontSize = tamañoNo + "px";
    }
});
function generarCorazones() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            let corazon = document.createElement("div");
            corazon.classList.add("corazon");
            corazon.innerHTML = "❤️";
            corazon.style.left = Math.random() * 100 + "vw";
            corazonesContainer.appendChild(corazon);

            setTimeout(() => {
                corazon.remove();
            }, 3000);
        }, i * 200);
    }
}

