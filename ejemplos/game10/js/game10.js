//variables globals
var canvas, ctx;

document.addEventListener('DOMContentLoaded', inici);

let dino_volador = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocitat = 5;
    this.color = '#ff0000';

    this.dibuixa = function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

    }

    this.mou = function () {
        this.x -= this.velocitat;
        if (this.x < -300) {
            let posRandom = Math.floor(Math.random() * (2400 - 1600 + 1) + 1600);
            this.x = posRandom;

            if (this.y = 220) {
                this.y += 30;                 
            } else{
                this.y = 200;
            }

            this.dibuixa();
        }
    }

    this.animacio = function () {
        if (this.color == '#ff0000') {
            this.color = '#000000';
        } else {
            this.color = "#ff0000";
        }
    }
}

let personatge = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocitat = 2;
    this.gravetat = 4.8;

    this.dibuixa = function () {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    this.mou = function () {
        this.x += this.velocitat;
    }

    this.descens = function () {
        if (this.y < (canvas.height - heroi.height)) {
            this.y += this.gravetat;
        }
    }

    this.salta = function () {
        if (this.y >= 250) {
            this.y -= this.gravetat * 40;
        }
    }

    this.aixecat = function () {
        this.height = 30;
        this.y = canvas.height - this.height;
        this.dibuixa();
    }

    this.ajupit = function () {
        this.height -= 10;
        this.y += 10;
        this.dibuixa();
    }
}

let heroi = new personatge(30, 30, 30, 30);
let ocell = new dino_volador(830, 220, 30, 30);

function inici() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    principal();
}

function principal() {
    esborrarCanvas();

    heroi.dibuixa();
    // heroi.mou();
    heroi.descens();

    ocell.dibuixa();
    ocell.mou();
    ocell.animacio();

    requestAnimationFrame(principal);
}

document.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key == 'ArrowUp') {
        console.log('heroi salta');
        heroi.salta();
    }

    if (e.key == 'ArrowDown') {
        if (!e.repeat) {
            heroi.ajupit();
        }
        console.log('heroi ajupit');
    }
})

document.addEventListener('keyup', (e) => {
    if (e.key == 'ArrowDown') {
        heroi.aixecat();
    }
})


function esborrarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}