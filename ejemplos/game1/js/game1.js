let xEscenari = 0;
let fps = 10;
let puntuacio = 0;

function mouEscenari(){
    xEscenari++;
    console.log(xEscenari);
}


function saltar() {
    console.log("estem saltant");
}


function principal(){
    mouEscenari();
}


setInterval(principal, 1000/fps);