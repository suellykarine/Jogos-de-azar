class Jogos {

    constructor(arrayResposta) {
        this._arrayResposta = arrayResposta
        this._indiceArray = null


    }

    gerarIndice() {

        this._indiceArray = Math.floor(Math.random() * Math.floor(this._arrayResposta.length))


    }
}

const respostaMagica = ["É certo", "É decididamente assim.", "Sem dúvida",
    " Sim, definitivamente", "Você pode confiar nele",
    "A meu ver, sim", " Muito provavelmente", "Perspectiva boa", "Sim", "As placas indicam sim",
    "Resposta nebulosa, tente novamen this._indiceRespostate", "Pergunte novamente mais tarde", "Melhor não contar agora",
    "Não é possível prever agora", "Concentre - se e pergunte novamente", "Não conte com isso ",
    "Minha resposta é não", "Minhas fontes dizem que não", "Perspectiva não tão boa", "Muito duvidoso"
]


//botao resposta




function btnClick() {

    const magic8 = new Jogos(respostaMagica)

    magic8.gerarIndice()

    const span1 = document.getElementById("texto-resposta")

    span1.innerText = "Sua resposta é: " + magic8._arrayResposta[magic8._indiceArray]


}



const btn = document.getElementById("btn")
btn.addEventListener("click", btnClick)


//reset
const span2 = document.getElementById("texto-resposta")

const btnReset = document.getElementById("btn-reset")

btnReset.addEventListener("click", function() {
    textarea.value = ""
    span2.innerText = ""
})