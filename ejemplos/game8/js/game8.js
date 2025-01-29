//variables globals
var canvas, ctx;


document.addEventListener('DOMContentLoaded', ()=>{
    //codi

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    var sprite = new Image();
    sprite.src = 'imatges/sprite_dino.png';

    sprite.onload = function(){
        let dino_volador = [
            {x: 260, y: 14, width:92, height:68},
            {x: 352, y: 14, width:92, height:68}
        ]

        let currentFrame = 0;

        setInterval (()=>{
            currentFrame++;

            if(currentFrame >= dino_volador.length){
                currentFrame = 0;
            }

            let frame = dino_volador[currentFrame];

            ctx.clearRect(0, 0, canvas.width, canvas.height); //Esborra el canvas anterior. 

            // Per dibuixar el canvas de l'animació
            //imatge, coordX_sprite, coordY_sprite, ample_sprite, posX_canvas, posY_canvas, ample_canvas, alt_canvas, ample_canvas, alto_canvas
            ctx.drawImage(sprite, frame.x, frame.y, frame.width, frame.height, 40, 30, frame.width, frame.height);

        }, 100);
    }
})