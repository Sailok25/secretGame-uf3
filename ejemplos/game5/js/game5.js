// variables globals
var canvas;
var ctx;
var fps = 20;

document.addEventListener('DOMContentLoaded', inici);

let fantasma = function (x, y) {
    this.x = x;
    this.y = y;

    this.dreta = true;

    this.mou = function (velocitat) {
        if (this.dreta == true){
            if (this.x < 470) {
                this.x += velocitat;              
            } else{
                this.dreta = false;
            }
        } else{
            if (this.x > 5) {
                this.x -= velocitat;
            } else{
                this.dreta = true;
            }
        }
    }


    this.dibuixa = function (imatge) {
        fantasmaImg = new Image();
        fantasmaImg.src = imatge;

        ctx.drawImage(fantasmaImg, this.x, this.y, 50, 50);
    }
}

let fantasma1 = new fantasma(10, 30);
let fantasma2 = new fantasma(10, 100);
let fantasma3 = new fantasma(10, 200);

let heroi = function(x, y){
    this.x = x;
    this.y = y;

    this.velocitat = 4;
    this.dibuixa = function(imatge){
        pacmanImg = new Image();
        pacmanImg.src = imatge;

        ctx.drawImage(pacmanImg, this.x, this.y, 50, 50);
    }

    this.esquerra = function(){
        this.x -= this.velocitat;
    }

    this.dreta = function(){
        this.x += this.velocitat;
    }

    this.adalt = function(){
        this.y -= this.velocitat;
    }

    this.abaix = function(){
        this.y += this.velocitat;
    }

    this.puntuacio = function(){
        ctx.font = "30px Impact";
        ctx.fillStyle = "grey";
        ctx.fillText("Score: " + this.x, 50, 50);
    }
}

let pacman = new heroi(50, 50)

function inici() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    setInterval(principal, 1000 / fps);
}

function principal() {
    esborrarCanvas();

    pacman.dibuixa('pacman/pacman.png')
    
    fantasma1.dibuixa('pacman/f-rojo.png');
    fantasma1.mou(5);

    fantasma2.dibuixa('pacman/f-amarillo.png');
    fantasma2.mou(10);

    fantasma3.dibuixa('pacman/f-verde.png');
    fantasma3.mou(15);

    pacman.dibuixa('img/pacman.png');

    pacman.puntuacio();
}

function esborrarCanvas() {
    canvas.width = 500;
    canvas.heigh = 300;
}


document.addEventListener('keydown', (tecla)=>{
    if (tecla.key == 'ArrowLeft'){
        pacman.esquerra();
    }
    
    if (tecla.key == 'ArrowRight') {
        pacman.dreta();
    }

    if (tecla.key == 'ArrowUp'){
        pacman.adalt();
    }

    if (tecla.key == 'ArrowDown'){
        pacman.abaix();    
    }
})