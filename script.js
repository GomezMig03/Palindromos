const inp=document.getElementById("text-input")
const bot=document.getElementById("check-btn")
const result=document.getElementById("result")

inp.addEventListener("keydown", (event) => {
    let empty=false;
    if (event.key === "Enter") {
        detectPal()
    }
})

inp.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        bot.style.transform="scale(1)"
    }
})

bot.addEventListener("mousedown", () => {
    detectPal()
})

bot.addEventListener("mouseup", () => {
    bot.style.transform="scale(1)"
})

const detectPal = ()=> {
    let text=inp.value
    if (text === "") {
        result.style.color = "red"
        result.innerHTML="Por favor, Introduzca un valor."
        bot.style.transform = "scale(0.97)"
    } else {
        result.style.color = "black"
        bot.style.transform = "scale(0.97)"
        if (isPal(text)) {
            result.innerHTML = "<strong>" + text + "</strong> es palíndromo"
        } else {
            result.innerHTML = "<strong>" + text + "</strong> no es palíndromo"
        }
    }
    result.style.visibility = "visible"
    inp.value=""
}

const isPal = (text) => {
    text=text.replace(/[^A-Za-z0-9]/gi, '').toLowerCase()
    const textInvert = text.split('').reverse().join('')
    return text === textInvert
}
