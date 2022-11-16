/**Permette di scorrere l'immagine attiva con quella sotto, modificando anche i filtri delle immagini laterali. 
 * 
 */
function slideDown() {
    currentImg++
    console.log(currentImg)

    centralImg.innerHTML=`<img class="w-100" src=${images[currentImg].image} alt="Immagine centrale del gioco">`
    centralScritta.innerHTML = `<h4 class="text-right">${images[currentImg].title}</h4> <p>${images[currentImg].text}</p>`

    let pastImg = document.querySelector(`#lista-img :nth-child(${currentImg}`)
    let nextImg = document.querySelector(`#lista-img :nth-child(${currentImg+1}`)

    pastImg.classList.toggle("gray")
    nextImg.classList.toggle("gray")
}

/**Permette di scorrere l'immagine attiva con quella sopra, modificando anche i filtri delle immagini laterali. 
 * 
 */
 function slideUp() {
    currentImg--
    console.log(currentImg)

    centralImg.innerHTML=`<img class="w-100" src=${images[currentImg].image} alt="Immagine centrale del gioco">`
    centralScritta.innerHTML = `<h4 class="text-right">${images[currentImg].title}</h4> <p>${images[currentImg].text}</p>`

    let pastImg = document.querySelector(`#lista-img :nth-child(${currentImg+1}`)
    let nextImg = document.querySelector(`#lista-img :nth-child(${currentImg+2}`)

    pastImg.classList.toggle("gray")
    nextImg.classList.toggle("gray")
}