// Variables globales
var canvas;
var ctx;
var fps = 20;
let currentFrame = 0;

// Objete Terra
let terra = function (imagen, y) {
    this.imagen = imagen;
    this.y = y;
    this.x1 = 0;
    this.x2 = canvas.width;
    this.velocidad = 4;

    // Métode per dibuixar el terra
    this.dibujar = function () {
        let img = new Image();
        img.src = this.imagen;

        ctx.drawImage(img, this.x1, this.y, canvas.width, 50);  // Primera imatge terra       
        ctx.drawImage(img, this.x2, this.y, canvas.width, 50); // Segona imatge terra
    };

    // Métode per moure el terra
    this.mover = function () {
        this.x1 -= this.velocidad;
        this.x2 -= this.velocidad;

        // Reiniciar la posició de les imatges
        if (this.x1 + canvas.width <= 0) {
            this.x1 = canvas.width;
        }
        if (this.x2 + canvas.width <= 0) {
            this.x2 = canvas.width;
        }
    };
};

let enemic = function (x, y) {
    this.x = x;
    this.y = y;

    let sprite = new Image();
    sprite.src = 'img/sprite_dino.png';
    
    let dino_volador = [
        { x: 260, y: 14, width: 92, height: 68 },
        { x: 352, y: 14, width: 92, height: 68 }
    ]

    this.dibuixa = function () {
        let frame = dino_volador[currentFrame];
        ctx.drawImage(sprite, frame.x, frame.y, frame.width, frame.height, this.x, this.y, frame.width, frame.height);
    };
}
    
// Objecte Dino
let heroi = function (x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.velocitat = 4;

    // Métode per dibuixar el dinosaure
    this.dibuixa = function (imatge) {
        let dinoImg = new Image();
        dinoImg.src = imatge;
        ctx.drawImage(dinoImg, this.x, this.y, this.width, this.height);
    };

    // Métodes per moure el dinosaure
    this.saltar = function () {
        this.y -= this.velocitat;
    };

    this.ajupir = function () {
        this.y += this.velocitat;
    };

    // Metode per mostrar la puntuació
    this.puntuacio = function () {
        ctx.font = "30px Impact";
        ctx.fillStyle = "grey";
        ctx.fillText("Score: " + this.x, 50, 50);
    };
};


// Crea un personatge
let dino = new heroi(30, 220);
let ocell = new enemic(500, 150);

// Funció per iniciar el joc
function inici() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    terra1 = new terra('img/fondo.png', 230);

    setInterval(() => {
        currentFrame = (currentFrame + 1) % 2;
    }, 100);

    setInterval(principal, 1000 / fps);
}

// Funció principal del joc
function principal() {
    esborrarCanvas();

    terra1.dibujar();
    terra1.mover();

    ocell.dibuixa();

    dino.dibuixa('img/dino.png');
    dino.puntuacio();

}

// Funció per borrar el canvas anterior
function esborrarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Event per detectar tecles de moviment
document.addEventListener('keydown', (tecla) => {
    if (tecla.key === 'ArrowUp') {
        dino.saltar();
    }
    if (tecla.key === 'ArrowDown') {
        dino.ajupir();
    }
});


document.addEventListener('DOMContentLoaded', inici);