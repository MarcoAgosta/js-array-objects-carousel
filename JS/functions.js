/**Permette di scorrere l'immagine attiva con quella sotto, modificando alnche i filtri delle immagini laterali. 
 * 
 */
function slideDown() {
    currentImg++

    console.log(currentImg)
    
    centralImg.innerHTML=`<img class="w-100" src=${images[currentImg].image} alt="Immagine centrale del gioco">`
    centralScritta.innerHTML = `<h4 class="text-right">${images[currentImg].title}</h4> <p>${images[currentImg].text}</p>`
}