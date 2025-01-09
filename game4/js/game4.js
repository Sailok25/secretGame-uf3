// variables globals
var canvas;
var ctx;

document.addEventListener('DOMContentLoaded', inici);

let personatge = function(x, y, nom, color){
    this.x = x;
    this.y = y;
    this.nom = nom;
    this.color = color;

    this.mou = function(){
        this.x = 100 ;
    }

    this.saludo = function(){
        console.log(`Hola! Soc ${this.nom}`);
    }

    this.dibuixa = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 30, 30);
    }
}

let personatge1 = new personatge(10, 30, 'Thor', "blue");
let personatge2 = new personatge(10, 100, 'Hulk', "green");
let personatge3 = new personatge(10, 200, 'Ironman', "red");

function inici(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d'); 

    personatge1.mou();
    personatge1.dibuixa();
    personatge1.saludo();

    personatge2.dibuixa();
    personatge2.saludo();

    personatge3.dibuixa();
    personatge3.saludo();
}