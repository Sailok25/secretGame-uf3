document.addEventListener('DOMContentLoaded', inici);

function inici() {
    let canvas = document.getElementById('canvas');

    canvas.addEventListener('mousedown', clickmouse);
    canvas.addEventListener('mouseup', soltarmouse);
    canvas.addEventListener('mousemove', mouremouse);
}

function clickmouse() {
    console.log('Has fet click al mouse');
}

function soltarmouse(){
    console.log('Has soltat el mouse');
}

function mouremouse(e){
    let x = e.pageX;
    let y = e.pageY;

    console.log(`Posició:  ${x}, ${y}`);
}