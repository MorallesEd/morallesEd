const navegacao = document.querySelector("header nav div.menu")
const menu = document.querySelector("header nav button.botao")

menu.addEventListener("click", () => {
    navegacao.style.height = "70vh"
})

navegacao.addEventListener("click", () => {
    navegacao.style.height = "0"
})