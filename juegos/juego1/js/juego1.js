// variables globals
var canvas;
var ctx;
var fps = 20;


document.addEventListener('DOMContentLoaded', inici);

let escenari = function () {
    this.x = 0;
    this.y = 160;
    this.velocitat = 2;

    this.dibuixa = function (imatge) {
        escenaImg = new Image();
        escenaImg.src = imatge;

        ctx.drawImage(escenaImg, this.x, this.y, 500, 15);
    }


    this.escenariMou = function(){
        if (this.pos == true){
            if (this.x < 470) {
                this.x += velocitat;              
            } else{
                this.pos = false;
            }
        } else{
            if (this.x > 5) {
                this.x -= velocitat;
            } else{
                this.pos = true;
            }
        }
    }

}

let terra = new escenari();

// Creem el objecte personatge y els atributs que pot tenir
let personatge = function (x, y) {
    this.x = x;
    this.y = y;

    this.velocitat = 4;
    this.mou = function (velocitat) {
        //codi
    }

    this.dibuixa = function (imatge) {
        dinoImg = new Image();
        dinoImg.src = imatge;

        ctx.drawImage(dinoImg, this.x, this.y, 50, 50);
    }

    this.salta = function () {
        this.y -= this.velocitat;
    }

    this.agotxa = function () {
        this.y += this.velocitat;
    }

    this.saltllarg = function () {
        this.x += this.velocitat * 2;
    }
}

// Crea un personatge: Dino 
let dino = new personatge(10, 120)

// Inicia el canva
function inici() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    setInterval(principal, 1000 / fps);
}

// Fa apareixe el dino y manipula les funcions
function principal() {
    esborrarCanvas();
    terra.dibuixa('iconos/fondo/fondo.png')

    dino.dibuixa('iconos/dino/dino.png');
    dino.mou(5);
}

// Esborra el canvas anterior per a que no es vegui duplicat
function esborrarCanvas() {
    canvas.width = 500;
    canvas.heigh = 300;
}

// Asignación de tecles per el movimient
document.addEventListener('keydown', (tecla) => {
    if (tecla.key == 'ArrowUp') {
        dino.salta();
        console.log("El dino salta")
    }

    if (tecla.key == 'ArrowDown') {
        dino.agotxa();
        console.log("El dino s'agotxa")
    }
})
