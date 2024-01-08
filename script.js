const inp=document.getElementById("text-input")
const bot=document.getElementById("check-btn")
const result=document.getElementById("result")

inp.addEventListener("keydown", (event) => {
    var empty=false;
    if (event.key === "Enter") {
        bot.click()
    }
})

inp.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        bot.style.transform="scale(1)"
    }
})

bot.addEventListener("click", () => {
    let text=inp.value
    if (text === "") {
        alert("Por favor escribe un valor")
    } else {
        bot.style.transform = "scale(0.97)"
        if (isPal(text)) {
            result.innerHTML = "<strong>" + text + "</strong> es palíndromo"
        } else {
            result.innerHTML = "<strong>" + text + "</strong> no es palíndromo"
        }
        result.style.visibility = "visible"
    }
    inp.value=""
})


const isPal = (text) => {
    text=text.replace(/[^A-Za-z0-9]/gi, '').toLowerCase()
    const textInvert = text.split('').reverse().join('')
    return text === textInvert
}
