// Escreva seu código aqui

const btn = document.getElementById("btn")

btn.addEventListener("click", gerarResposta)

const span = document.getElementById("texto-resposta")





const respostas = ["É certo", "É decididamente assim.", "Sem dúvida",
    " Sim, definitivamente", "Você pode confiar nele",
    "A meu ver, sim", " Muito provavelmente", "Perspectiva boa", "Sim", "As placas indicam sim",
    "Resposta nebulosa, tente novamente", "Pergunte novamente mais tarde", "Melhor não contar agora",
    "Não é possível prever agora", "Concentre - se e pergunte novamente", "Não conte com isso ",
    "Minha resposta é não", "Minhas fontes dizem que não", "Perspectiva não tão boa", "Muito duvidoso"
]

function gerarResposta() {
    const num = Math.floor(Math.random() * Math.floor(respostas.length))
    console.log(num)
    span.innerText = respostas[num]

}

const btnReset = document.getElementById("btn-reset")
btnReset.addEventListener("click", function() {
    textarea.value = ""
    span.innerText = ""
})