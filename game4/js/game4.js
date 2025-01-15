// variables globals
var canvas;
var ctx;
var fps = 20;

document.addEventListener('DOMContentLoaded', inici);

let personatge = function (x, y, nom, color) {
    this.x = x;
    this.y = y;
    this.nom = nom;
    this.color = color;

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


    this.saludo = function () {
        console.log(`Hola! Soc ${this.nom}`);
    }

    this.dibuixa = function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 30, 30);
    }
}

let personatge1 = new personatge(10, 30, 'Thor', "blue");
let personatge2 = new personatge(10, 100, 'Hulk', "green");
let personatge3 = new personatge(10, 200, 'Ironman', "red");

function inici() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    setInterval(principal, 1000 / fps);
}

function principal() {
    esborrarCanvas();

    personatge1.mou(5);
    personatge1.dibuixa();
    personatge1.saludo();

    personatge2.mou(10);
    personatge2.dibuixa();
    personatge2.saludo();

    personatge3.mou(15);
    personatge3.dibuixa();
    personatge3.saludo();
}

function esborrarCanvas() {
    canvas.width = 500;
    canvas.heigh = 300;
}