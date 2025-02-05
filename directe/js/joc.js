// Variables globals
var canvas;
var ctx;
var fps = 20;
var sprite;

document.addEventListener('DOMContentLoaded', inici);

let dinosaure = function (x, y) {
    this.x = x;
    this.y = y;
    this.amplada = 88;
    this.alcada = 94;
    this.saltant = false;
    this.ajupit = false;
    this.alcadaSalt = 100;
    this.inicialY = y;
    this.animacioActual = dinosaure_trex;
    this.fotogramaActual = 0;

    this.dibuixa = function () {
        let fotograma = this.animacioActual[this.fotogramaActual];
        ctx.drawImage(
            sprite,
            fotograma.x, fotograma.y, fotograma.amplada, fotograma.alcada,
            this.x, this.y, this.amplada, this.alcada
        );

        this.fotogramaActual = (this.fotogramaActual + 1) % this.animacioActual.length;
    }

    this.saltar = function () {
        if (!this.saltant) {
            this.saltant = true;
            this.y -= this.alcadaSalt;
            this.animacioActual = dinosaure_salta;
        }
    }

    this.ajupir = function () {
        this.ajupit = true;
        this.animacioActual = dinosaure_ajupit;
        this.alcada = 60;
    }

    this.aixecar = function () {
        this.ajupit = false;
        this.animacioActual = dinosaure_trex;
        this.alcada = 94;
    }

    this.actualitzar = function () {
        if (this.saltant) {
            setTimeout(() => {
                this.y = this.inicialY;
                this.saltant = false;
                this.animacioActual = dinosaure_trex;
            }, 300);
        }
    }
}

let enemic = function (x, y, amplada, alcada, velocitat, animacio) {
    this.x = x;
    this.y = y;
    this.amplada = amplada;
    this.alcada = alcada;
    this.velocitat = velocitat;
    this.animacioActual = animacio;
    this.fotogramaActual = 0;

    this.dibuixa = function () {
        let fotograma = this.animacioActual[this.fotogramaActual];
        ctx.drawImage(
            sprite,
            fotograma.x, fotograma.y, fotograma.amplada, fotograma.alcada,
            this.x, this.y, this.amplada, this.alcada
        );

        this.fotogramaActual = (this.fotogramaActual + 1) % this.animacioActual.length;
    }

    this.mou = function () {
        this.x -= this.velocitat;

        if (this.x + this.amplada < 0) {
            this.x = canvas.width;
        }
    }
}

let dinosaure1;
let cactus1;
let ocell1;
let suelo;

function inici() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    sprite = new Image();
    sprite.src = 'img/sprite_dino.png';

    sprite.onload = function () {
        dinosaure_trex = [
            { x: 1514, y: 2, amplada: 88, alcada: 94 },
            { x: 1602, y: 2, amplada: 88, alcada: 94 }
        ];

        dinosaure_salta = [
            { x: 1338, y: 2, amplada: 88, alcada: 94 },
            { x: 1426, y: 2, amplada: 88, alcada: 94 }
        ];

        dinosaure_ajupit = [
            { x: 1866, y: 36, amplada: 118, alcada: 60 },
            { x: 1984, y: 36, amplada: 118, alcada: 60 }
        ];

        cactus1_animacio = [
            { x: 446, y: 2, amplada: 34, alcada: 70 },
            { x: 446, y: 2, amplada: 34, alcada: 70 }
        ];

        ocell1_animacio = [
            { x: 260, y: 14, amplada: 92, alcada: 68 },
            { x: 352, y: 14, amplada: 92, alcada: 68 }
        ];

        
        ocell2_animacio = [
            { x: 260, y: 14, amplada: 92, alcada: 68 },
            { x: 352, y: 14, amplada: 92, alcada: 68 }
        ];

        nube1_animacio = [
            { x: 166, y: 2, amplada: 92, alcada: 27 },
            { x: 166, y: 2, amplada: 92, alcada: 27 }
        ];

        // Definir el suelo
        suelo = {
            x: 0,
            y: canvas.height - 46,
            amplada: 2406,
            alcada: 26,
            velocitat: 12,

            dibuixa: function () {
                ctx.drawImage(
                    sprite,
                    0, 104, this.amplada, this.alcada, // Coordenadas del sprite
                    this.x, this.y, this.amplada, this.alcada // Coordenadas en el canvas
                );
            },

            mou: function () {
                this.x -= this.velocitat;

                // Repetir el suelo cuando sale del canvas
                if (this.x + this.amplada < canvas.width) {
                    this.x = 0;
                }
            }
        };

        dinosaure1 = new dinosaure(100, canvas.height - 110); // Dino Trex
        cactus1 = new enemic(canvas.width, canvas.height - 96, 44, 80, 12, cactus1_animacio); // Cactus sobre el suelo
        ocell1 = new enemic(canvas.width, 200, 80, 70, 18, ocell1_animacio); // Pájaro1
        ocell2 = new enemic(canvas.width, 200, 80, 70, 18, ocell2_animacio); // Pájaro2
        nube1 = new enemic(canvas.width, 20, 40, 21, 5, nube1_animacio); // Nube1
        nube2 = new enemic(canvas.width, 83, 120, 25, 7, nube1_animacio); // Nube2
        nube3 = new enemic(canvas.width, 154, 100, 13, 6, nube1_animacio); // Nube3
        nube4 = new enemic(canvas.width, 59, 50, 20, 8, nube1_animacio); // Nube4
        nube5 = new enemic(canvas.width, 38, 80, 29, 4, nube1_animacio); // Nube5

        setInterval(principal, 1000 / fps);
    };
}

function principal() {
    esborrarCanvas();

    suelo.dibuixa();
    suelo.mou();

    cactus1.dibuixa();
    cactus1.mou();

    nube1.dibuixa();
    nube1.mou();
    nube2.dibuixa();
    nube2.mou();
    nube3.dibuixa();
    nube3.mou();
    nube4.dibuixa();
    nube4.mou();
    nube5.dibuixa();
    nube5.mou();

    ocell1.dibuixa();
    ocell1.mou();
    ocell2.dibuixa();
    ocell2.mou();

    dinosaure1.dibuixa();
    dinosaure1.actualitzar();
}

function esborrarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

document.addEventListener('keydown', (tecla) => {
    if (tecla.key == 'ArrowUp') {
        dinosaure1.saltar();
    }

    if (tecla.key == 'ArrowDown') {
        dinosaure1.ajupir();
    }
});

document.addEventListener('keyup', (tecla) => {
    if (tecla.key == 'ArrowDown') {
        dinosaure1.aixecar();
    }
});