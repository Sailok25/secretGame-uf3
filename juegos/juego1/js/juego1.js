// variables globals
var canvas;
var ctx;
var fps = 20;


document.addEventListener('DOMContentLoaded', inici);

// Declarar objeto personaje y sus atributos
// let objecte = function(x, y){
//     this.x = x;
//     this.y = y;

//     this.dreta = true;

//     this.mou = function (velocitat) {
//         if (this.dreta == true){
//             if (this.x < 470) {
//                 this.x += velocitat;              
//             } else{
//                 this.dreta = false;
//             }
//         } else{
//             if (this.x > 5) {
//                 this.x -= velocitat;
//             } else{
//                 this.dreta = true;
//             }
//         }
//     }

//     this.dibuixa = function (imatge) {
//         objecteImg = new Image();
//         objecteImg.src = imatge;

//         ctx.drawImage(objecteImg, this.x, this.y, 50, 50);
//     }
// }

// // Declarem nous objectes amb els seus atributs
// let cactus = new objecte (10, 30)
// let ocell = new objecte (10, 30)
// let nuvols = new objecte (10, 30)
// let terra = new objecte (10, 30)


// Creem el objecte personatge y els atributs que pot tenir
let personatge = function(x, y){
    this.x = x;
    this.y = y;
    
    this.velocitat = 4;
    this.mou = function (velocitat) {
        //codi
    }

    this.dibuixa = function(imatge){
        dinoImg = new Image();
        dinoImg.src = imatge;

        ctx.drawImage(dinoImg, this.x, this.y, 50, 50);
    }

    this.adalt = function(){
        this.y -= this.velocitat;
    }

    this.abaix = function(){
        this.y += this.velocitat;
    }
}


// Crea un personatge: Dino 
let dino = new personatge(10,30)


// Inicia el canva
function inici() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    setInterval(principal, 1000 / fps);
}

// Fa apareixe el dino y manipula les funcions
function principal(){
    esborrarCanvas();
    dino.dibuixa('iconos/dino.png');
    dino.mou(5);
}

// Esborra el canvas anterior per a que no es vegui duplicat
function esborrarCanvas() {
    canvas.width = 500;
    canvas.heigh = 300;
}

// Asignación de teclas para el movimiento
document.addEventListener('keydown', (tecla)=>{
    if (tecla.key == 'ArrowUp'){
        dino.adalt();
        console.log("El dino salta")
    }

    if (tecla.key == 'ArrowDown'){
        dino.abaix();
        console.log("El dino s'agotxa")    
    }
})