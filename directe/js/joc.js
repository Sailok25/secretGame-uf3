// Variables globals
var canvas;
var ctx;
var fps = 20;
var sprite;
var puntuacio = 0;
var puntuacioMaxima = 0;
var partidaFinalitzada = false;
var objecteAleatoriOcell = 0;
var objecteAleatoriCactus = 0;
let ultimaMillora = 0;

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
        this.y = 320;
    }

    this.aixecar = function () {
        this.ajupit = false;
        this.animacioActual = dinosaure_trex;
        this.alcada = 94;
        this.y = this.inicialY;
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

let enemic_ocell = function (x, y, amplada, alcada, velocitat, animacio) {
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
            objecteAleatoriOcell = Math.floor(Math.random() * 3);
        }
    }
}

let enemic_cactus = function (x, y, amplada, alcada, velocitat, animacio) {
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
            objecteAleatoriCactus = Math.floor(Math.random() * 6);
        }
    }
}

let nuvol = function (x, y, amplada, alcada, velocitat, animacio) {
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


let arrayEnemicsOcell = [];
let arrayEnemicsCactus = [];

let dinosaure1;
let cactus1;
let ocell1;
let terra;

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
            { x: 1338, y: 2, amplada: 88, alcada: 94 },
        ];

        dinosaure_ajupit = [
            { x: 1866, y: 36, amplada: 118, alcada: 60 },
            { x: 1984, y: 36, amplada: 118, alcada: 60 }
        ];



        cactus1_animacio = [
            { x: 446, y: 2, amplada: 34, alcada: 70 },
            { x: 446, y: 2, amplada: 34, alcada: 70 }
        ];

        cactus2_animacio = [
            { x: 514, y: 2, amplada: 34, alcada: 70 },
            { x: 514, y: 2, amplada: 34, alcada: 70 }
        ];

        cactus3_animacio = [
            { x: 582, y: 2, amplada: 34, alcada: 70 },
            { x: 582, y: 2, amplada: 34, alcada: 70 }
        ];

        cactus4_animacio = [
            { x: 850, y: 2, amplada: 102, alcada: 101 },
            { x: 850, y: 2, amplada: 102, alcada: 101 }
        ];

        cactus5_animacio = [
            { x: 752, y: 2, amplada: 50, alcada: 100 },
            { x: 752, y: 2, amplada: 50, alcada: 100 }
        ];

        cactus6_animacio = [
            { x: 702, y: 2, amplada: 48, alcada: 100 },
            { x: 702, y: 2, amplada: 48, alcada: 100 }
        ];



        ocell1_animacio = [
            { x: 260, y: 14, amplada: 92, alcada: 68 },
            { x: 352, y: 14, amplada: 92, alcada: 68 }
        ];

        ocell2_animacio = [
            { x: 260, y: 14, amplada: 92, alcada: 68 },
            { x: 352, y: 14, amplada: 92, alcada: 68 }
        ];

        ocell3_animacio = [
            { x: 260, y: 14, amplada: 92, alcada: 68 },
            { x: 352, y: 14, amplada: 92, alcada: 68 }
        ];



        nube1_animacio = [
            { x: 166, y: 2, amplada: 92, alcada: 27 },
            { x: 166, y: 2, amplada: 92, alcada: 27 }
        ];



        terra = {
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

                // Repetir el terra cuando sale del canvas
                if (this.x + this.amplada < canvas.width) {
                    this.x = 0;
                }
            }
        };

        dinosaure1 = new dinosaure(100, canvas.height - 110); // Dino Trex
        cactus1 = new enemic_cactus(canvas.width, canvas.height - 96, 44, 80, 12, cactus1_animacio); // Cactus1
        cactus2 = new enemic_cactus(canvas.width, canvas.height - 96, 44, 80, 12, cactus2_animacio); // Cactus1
        cactus3 = new enemic_cactus(canvas.width, canvas.height - 96, 44, 80, 12, cactus3_animacio); // Cactus1
        cactus4 = new enemic_cactus(canvas.width, canvas.height - 96, 102, 80, 12, cactus4_animacio); // Cactus1
        cactus5 = new enemic_cactus(canvas.width, canvas.height - 96, 50, 80, 12, cactus5_animacio); // Cactus1
        cactus6 = new enemic_cactus(canvas.width, canvas.height - 96, 48, 80, 12, cactus6_animacio); // Cactus1
        ocell1 = new enemic_ocell(canvas.width, 200, 80, 70, 18, ocell1_animacio); // Pájaro1
        ocell2 = new enemic_ocell(canvas.width, 320, 80, 70, 15, ocell2_animacio); // Pájaro2
        ocell3 = new enemic_ocell(canvas.width, 250, 80, 70, 13, ocell3_animacio); // Pájaro2
        nube1 = new nuvol(canvas.width, 20, 80, 29, 5, nube1_animacio); // Nube1
        nube2 = new nuvol(canvas.width, 83, 80, 29, 7, nube1_animacio); // Nube2
        nube3 = new nuvol(canvas.width, 154, 80, 29, 6, nube1_animacio); // Nube3
        nube4 = new nuvol(canvas.width, 59, 80, 29, 8, nube1_animacio); // Nube4
        nube5 = new nuvol(canvas.width, 38, 80, 29, 4, nube1_animacio); // Nube5

        setInterval(principal, 1000 / fps);

        arrayEnemicsCactus.push(cactus1, cactus2, cactus3, cactus4, cactus5, cactus6);

        arrayEnemicsOcell.push(ocell1, ocell2, ocell3);
    };
}

function principal() {
    esborrarCanvas();

    terra.dibuixa();
    terra.mou();

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

    dinosaure1.dibuixa();
    dinosaure1.actualitzar();

    actualitzarPuntuacio();

    obstaclealeatoris();

    actualitzarVelocitat();

}

function esborrarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

document.addEventListener('keydown', (tecla) => {
    if (tecla.key == 'ArrowUp') {
        dinosaure1.saltar();
    }
});

document.addEventListener('keydown', (tecla) => {
    if (tecla.key == 'ArrowDown') {
        dinosaure1.ajupir();
    }
});

document.addEventListener('keyup', (tecla) => {
    if (tecla.key == 'ArrowDown') {
        dinosaure1.aixecar();
    }
});

function actualitzarPuntuacio() {
    ctx.font = "20px Impact";
    ctx.fillStyle = "grey";
    ctx.fillText("HI  " + puntuacioMaxima + "        " + puntuacio, 850, 40);
    puntuacio++;
}


function guardarPuntuacio() {
    console.log("Puntuacio: " + puntuacio)
    max = localStorage.getItem("puntuacioMaxima")
    if (max == null) {
        localStorage.setItem("puntuacioMaxima", puntuacio);
    } else if (max < puntuacio) {
        localStorage.setItem("puntuacioMaxima", puntuacio);
    }
    puntuacioMaxima = max
}

function obstaclealeatoris() {
    arrayEnemicsCactus[objecteAleatoriCactus].dibuixa();
    arrayEnemicsCactus[objecteAleatoriCactus].mou();

    arrayEnemicsOcell[objecteAleatoriOcell].dibuixa();
    arrayEnemicsOcell[objecteAleatoriOcell].mou();


    // cactus1.dibuixa();
    // cactus1.mou();

    // ocell1.dibuixa();
    // ocell1.mou();
    // ocell2.dibuixa();
    // ocell2.mou();
    // ocell3.dibuixa();
    // ocell3.mou();
}

function actualitzarVelocitat() {
    if (puntuacio >= ultimaMillora + 300) {
        ultimaMillora = puntuacio;

        // recorrer el array per a que tots els ocells del array augmentin
        arrayEnemicsOcell.forEach(ocell => {
            ocell.velocitat += 1.5;
        });

        // recorrer el array per a que tots els cactus del array augmentin
        arrayEnemicsCactus.forEach(cactus => {
            cactus.velocitat += 1.5;
        });

        terra.velocitat += 1.5; // no recorre array peque nomes es 1 terra    }

    }
    console.log(`Velocitat actual - Terra: ${terra.velocitat}, Ocell: ${arrayEnemicsOcell[0].velocitat}, Cactus: ${arrayEnemicsCactus[0].velocitat}`);
}