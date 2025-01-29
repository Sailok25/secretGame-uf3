// Variables globales
var canvas;
var ctx;
var fps = 20;

// Objeto Suelo
let suelo = function(imagen, y) {
    this.imagen = imagen;
    this.y = y; // Posición vertical del suelo
    this.x1 = 0; // Posición horizontal de la primera imagen
    this.x2 = canvas.width; // Posición horizontal de la segunda imagen
    this.velocidad = 4; // Velocidad de desplazamiento del suelo

    // Método para dibujar el suelo
    this.dibujar = function() {
        let img = new Image();
        img.src = this.imagen;

        // Dibujar la primera imagen
        ctx.drawImage(img, this.x1, this.y, canvas.width, 50);

        // Dibujar la segunda imagen
        ctx.drawImage(img, this.x2, this.y, canvas.width, 50);
    };

    // Método para mover el suelo
    this.mover = function() {
        this.x1 -= this.velocidad;
        this.x2 -= this.velocidad;

        // Reiniciar la posición de las imágenes cuando salen del canvas
        if (this.x1 + canvas.width <= 0) {
            this.x1 = canvas.width;
        }
        if (this.x2 + canvas.width <= 0) {
            this.x2 = canvas.width;
        }
    };
};

// Objeto Dinosaurio
let heroi = function(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.velocitat = 4; // Velocidad de movimiento

    // Método para dibujar el dinosaurio
    this.dibuixa = function(imatge) {
        let dinoImg = new Image();
        dinoImg.src = imatge;
        ctx.drawImage(dinoImg, this.x, this.y, this.width, this.height);
    };

    // Métodos para mover el dinosaurio
    this.saltar = function() {
        this.y -= this.velocitat;
    };

    this.ajupir = function() {
        this.y += this.velocitat;
    };

    // Método para mostrar la puntuación (opcional)
    this.puntuacio = function() {
        ctx.font = "30px Impact";
        ctx.fillStyle = "grey";
        ctx.fillText("Score: " + this.x, 50, 50);
    };
};

// Crear una instancia del héroe (dinosaurio)
let dino = new heroi(30, 220);

// Variable para almacenar la instancia del suelo
let suelo1;

// Función para iniciar el juego
function inici() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    // Crear la instancia del suelo después de inicializar el canvas
    suelo1 = new suelo('img/fondo.png', 230); // Ajusta la ruta de la imagen y la posición Y

    setInterval(principal, 1000 / fps);
}

// Función principal del juego
function principal() {
    esborrarCanvas();

    // Dibujar y mover el suelo
    suelo1.dibujar();
    suelo1.mover();

    // Dibujar el dinosaurio y mostrar la puntuación
    dino.dibuixa('img/dino.png');
    dino.puntuacio(); // Mostrar puntuación (opcional)
}

// Función para borrar el canvas
function esborrarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
}

// Evento para detectar teclas presionadas
document.addEventListener('keydown', (tecla) => {
    if (tecla.key === 'ArrowUp') { // Mover hacia arriba
        dino.saltar();
    }
    if (tecla.key === 'ArrowDown') { // Mover hacia abajo
        dino.ajupir();
    }
});

// Iniciar el juego cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inici);