// Exo 1 Start
let titre = document.querySelector("h2")

titre.innerText = "le titre modifié"
titre.style.color = "red"
titre.classList.add("bg-primary")

// Exo 2 Start
let buttons = document.querySelectorAll("#header .btn")
let active;

buttons[0].addEventListener("click", () =>{
    let exo1 = document.querySelector("#exo1")
    exo1.classList.remove("d-none")
    if (active){
        active.classList.add("d-none")
    }
    active = exo1
})
buttons[1].addEventListener("click", () =>{
    let exo2 = document.querySelector("#exo2")
    exo2.classList.remove("d-none")
    if (active){
        active.classList.add("d-none")
    }
    active = exo2
})
buttons[2].addEventListener("click", () =>{
    let exo3 = document.querySelector("#exo3")
    exo3.classList.remove("d-none")
    if (active){
        active.classList.add("d-none")
    }
    active = exo3
})
buttons[3].addEventListener("click", () =>{
    let exo4 = document.querySelector("#exo4")
    exo4.classList.remove("d-none")
    if (active){
        active.classList.add("d-none")
    }
    active = exo4
})
buttons[4].addEventListener("click", () =>{
    let exo5 = document.querySelector("#exo5")
    exo5.classList.remove("d-none")
    if (active){
        active.classList.add("d-none")
    }
    active = exo5
})
buttons[5].addEventListener("click", () =>{
    let exo6 = document.querySelector("#exo6")
    exo6.classList.remove("d-none")
    if (active){
        active.classList.add("d-none")
    }
    active = exo6
})

// Exo 3 Start
let buttonGo = document.querySelector("#exo3 button")
let inconnu = document.querySelector("#exo3 h2")
let name = document.querySelector("#exo3 input")

buttonGo.addEventListener("click", () =>{
    let valeur = name.value[0].toUpperCase()+ name.value.slice(1)
    inconnu.innerText = `welcome ${valeur}`
})

// Exo 4
let i = 0
let boxButton = document.querySelector("#exo4 button")
boxButton.addEventListener("click", () => {

    let box1 = document.querySelector("#box1")
    box1.classList.toggle('d-none')

    let box2 = document.querySelector("#box2")
    box2.classList.toggle('d-none')

    i++
    let boxSpan = exo4.querySelector("span")
    boxSpan.innerText = `nombre de click ${i}`
})

// Exo 5

let buttonOeuf = document.querySelector("#exo5 button")

buttonOeuf.addEventListener("click", () => {
    let imgOeuf = document.createElement("img")
    imgOeuf.src = "./public/img/oeuf.png"
    imgOeuf.style.height = "100px"
    let divOeuf = document.querySelector("#oeufs")
    divOeuf.appendChild(imgOeuf)
})

//Exo 6

let buttonEgale = document.querySelector("#exo6 button")
let valeur1 = document.querySelector("#exo6 input")
let valeur2 = document.querySelectorAll("#exo6 input")[1]
let resultat = document.querySelector("#rep")

buttonEgale.addEventListener("click", () => {
    resultat.innerText = parseInt(valeur2.value) + parseInt(valeur1.value)
})


// Exo 6 : calculatrice

let numbers = document.querySelectorAll(".numbers")
let inputCal = document.querySelector("#calculatrice input")
let operators = document.querySelectorAll(".operators")
let off = false
let valeurFirst = ''
let operateur = ''
let egale = document.querySelector("#egale")
let reponse = document.querySelector("#calculatrice span")


for (const number of numbers) {
    number.addEventListener("click", (e) => {
        inputCal.value += e.currentTarget.textContent
    })
}
for (const operator of operators) {
    operator.addEventListener("click", (e) => {
        valeurFirst = inputCal.value
        inputCal.value = ''
        operateur = e.currentTarget.textContent
})
}

egale.addEventListener("click", () => {

    switch (operateur) {
        case "+":
            reponse.textContent = parseInt(valeurFirst) + parseInt(inputCal.value)
            break;
        case "-":
            reponse.textContent = parseInt(valeurFirst) - parseInt(inputCal.value)
            break;
        case "*":
            reponse.textContent = parseInt(valeurFirst) * parseInt(inputCal.value)
            break;
        case "/":
            reponse.textContent = parseInt(valeurFirst) / parseInt(inputCal.value)
            break;
    }
})

let remote = document.querySelector("#remote")

remote.addEventListener("click", () => {
    inputCal.value = ''
    reponse.innerText = '?'
})








