//Array di objects con image, title e text
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


//Prese le parti variabili del documento
const upBtn = document.getElementById("button-up");
const downBtn = document.getElementById("button-down");
const centralImg = document.getElementById("img-center");
const centralScritta = document.getElementById("scritta");
const listaImg = document.getElementById("lista-img");


//Creata la variabile con cui terrò traccia dell'immagine attiva
let currentImg = 0;


//Creata situazione iniziale della pagina
centralImg.innerHTML = `<img class="w-100" src=${images[0].image} alt="Immagine centrale del gioco">`;
centralScritta.innerHTML = `<h4 class="text-right">${images[0].title}</h4> <p>${images[0].text}</p>`;
images.forEach(function(element, i,){
    if (i==0){
        listaImg.innerHTML += `<img src=${element.image} class="w-100" alt="Immagine laterale">`
    } else {
        listaImg.innerHTML += `<img src=${element.image} class="w-100 gray" alt="Immagine laterale">`
    }
} );


//Data la funzione ai due pulsanti
downBtn.addEventListener( "click", slideDown);
upBtn.addEventListener( "click", slideUp);


//Prendo i pulsanti che controlleranno l'auto-slide
const playBtn = document.getElementById("btn-play");
const stopBtn = document.getElementById("btn-stop");
const changeBtn = document.getElementById("btn-change");


//Creo due variabili che mi serviranno per far funzionare il timer
let clock = null;
let scorrimento = 1


//Do la funzione ai tre pulsanti che gestiscono l'auto-slide
playBtn.addEventListener("click", function(){
    clearInterval(clock);

    if (scorrimento == 1){
        clock = setInterval(slideDown, 3000);
    } else if (scorrimento == 0){
        clock = setInterval(slideUp, 3000)
    };
} );

stopBtn.addEventListener("click", function(){
    clearInterval(clock);
});

changeBtn.addEventListener("click", function(){
    clearInterval(clock);

    if (scorrimento == 1){
        scorrimento = 0
    } else if (scorrimento == 0){
        scorrimento = 1
    };

    if (scorrimento == 1){
        clock = setInterval(slideDown, 3000);
    } else if (scorrimento == 0){
        clock = setInterval(slideUp, 3000)
    };
})