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

function inici() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    setInterval(principal, 1000 / fps);
}

function principal() {
    esborrarCanvas();

    fantasma1.dibuixa('pacman/f-rojo.png');
    fantasma1.mou(5);

    fantasma2.dibuixa('pacman/f-amarillo.png');
    fantasma2.mou(10);

    fantasma3.dibuixa('pacman/f-verde.png');
    fantasma3.mou(15);
}

function esborrarCanvas() {
    canvas.width = 500;
    canvas.heigh = 300;
}