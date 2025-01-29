//variables globals
var canvas, ctx;


document.addEventListener('DOMContentLoaded', ()=>{
    //codi

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    var sprite = new Image();
    sprite.src = 'imatges/dino_corrent.png';

    sprite.onload = function(){
        let numColumns = 2;
        let numRows = 1;

        let frameWidth = sprite.width / numColumns;
        let frameHeight = sprite.height / numRows;

        let currentFrame = 0;

        setInterval (()=>{
            currentFrame++;
            let maxFrame = numColumns * numRows -1  //Començo per 0 per aixó li restem -1
            if(currentFrame > maxFrame){
                currentFrame = 0;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height); //Esborra el canvas anterior. 

            // Per dibuixar el canvas de l'animació
            //imatge, coordX_sprite, coordY_sprite, ample_sprite, posX_canvas, posY_canvas, ample_canvas, alt_canvas, ample_canvas, alto_canvas
            ctx.drawImage(sprite, currentFrame * frameWidth, 0, frameWidth, frameHeight, 40, 30, frameWidth, frameHeight);

        }, 100);
    }
})