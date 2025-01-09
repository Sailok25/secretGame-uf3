// Printa per pantalla la tecla pulsada
document.addEventListener('keydown', (tecla)=>{
    if (tecla.keyCode == '38') {
        console.log('amunt');
    }

    if (tecla.keyCode == '40'){
        console.log('abaix');
    }

    if (tecla.keyCode == '37') {
        console.log('esquerra');
    }

    if (tecla.keyCode == '39'){
        console.log('dreta');
    }

    if (tecla.keyCode == '32'){
        console.log('saltar');
    }
})


// Events de teclat amb la llibreria "keypress.js"
let configTeclat = {prevent_repeat: true};
let eventTeclat = new window.keypress.Listener(this, configTeclat);

eventTeclat.simple_combo('a', teclaA);
eventTeclat.simple_combo('b', teclaB);
eventTeclat.sequence_combo('up down a b', atacEspecial);

function teclaA(){
    console.log('Has fet clit a la tecla A');
}

function teclaB(){
    console.log('Has fet clic a la tecla B');
}

function atacEspecial(){
    console.log('Atac especial !!!');
}