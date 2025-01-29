// Variables globals
var canvas;
var ctx;
var fps = 60;

// Crear objecte escenari
let escenari = function () {
    this.x = 0;
    this.velocitat = 5;
    this.imatgeFons = 'img/fondo.png'; 

    this.Terraimg = new Image();
    this.Terraimg.src = this.imatgeFons;

    // Moviment de l'escenari
    this.mou = function () {
        this.x -= this.velocitat;

        if (this.x <= -canvas.width) {
            this.x = 0;
        }
    };

    this.dibuixa = function () {
        ctx.drawImage(this.Terraimg, this.x, canvas.height - this.Terraimg.height);
    };
};

let terra = new escenari();


// Crear objecte "dinosaurio"
let dinosaurio = function () {
    this.x = 50;
    this.y = 240;
    this.velocitat = 10;  
    this.imatgeDino = 'img/dino.png'; 

    this.imgDino = new Image();
    this.imgDino.src = this.imatgeDino;

    this.mouAmunt = function () {
        if (this.y > 180) {  // No deixar que el dinosaure surti de la pantalla
            this.y -= this.velocitat;
        }
    };

    // Funció per moure el dinosaure cap avall
    this.mouAvall = function () {
        if (this.y < canvas.height - 60) { // No deixar que el dinosaure surti de la pantalla
            this.y += this.velocitat;
        }
    };

    this.dibuixa = function () {
        ctx.drawImage(this.imgDino, this.x, this.y, 50, 50);
    };
};

let dino = new dinosaurio();

// Funció per inicialitzar el canvas
function inici() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    setInterval(principal, 1000 / fps);
}

// Funció principal que actualitza el moviment i dibuixa l'escenari i dinosaure
function principal() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    terra.mou();
    terra.dibuixa();
    dino.dibuixa();
}

// Funció per capturar esdeveniments del teclat
document.addEventListener('keydown', function(tecla) {
    if (tecla.key === 'ArrowUp') {
        dino.mouAmunt();
    }
    if (tecla.key === 'ArrowDown') {
        dino.mouAvall();
    }
});

// Inicialitzar el joc cual la pagina estigui carregada
document.addEventListener('DOMContentLoaded', inici);
