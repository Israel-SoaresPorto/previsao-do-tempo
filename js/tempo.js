const key = "e3f21bd141553e8b8861d87b0b06b9af"

const nomeCidade = document.querySelector(".input-cidade")
const buscaCidade = document.querySelector(".botao-busca")
const textoCidade = document.querySelector(".cidade")
const temp = document.querySelector(".temp")
const imgPrevisao = document.querySelector(".img-previsao")
const textoPrevisao = document.querySelector(".texto-previsao")

buscaCidade = addEventListener('click', buscarCidade)

 async function buscarCidade() {

    const cidade = nomeCidade.value

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    .then(resposta => resposta.json())

    textoCidade.textContent = "Tempo em " + dados.name + ", " + dados.sys.country

    temp.textContent = Math.ceil(dados.main.temp) + "°C"

    imgPrevisao.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    textoPrevisao.textContent = dados.weather[0].description

    console.log(dados)	
}