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