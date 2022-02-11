export default function logicalClimate(){
   
    fetch("https://api.weatherapi.com/v1/current.json?key=1908e74e14814574bc602922220602&q=Juiz-de-Fora&aqi=no")
    .then(resposta => resposta.json()) .then(dado =>{
    
        const $ = document.querySelector.bind(document)

    const local = $("#Localizacao h1")
    const temperatura = $("#Clima p")
    let iconClima = $("#Clima img")


    const cidade = dado.location.name
    local.textContent = cidade
    console.log(local)

    const temperaturaAtual = dado.current.temp_c
    temperatura.textContent = temperaturaAtual 
    console.log(temperaturaAtual)

    const iconClimaAtual= dado.current.condition.icon
    iconClima.src = iconClimaAtual
    console.log(iconClimaAtual)

    })
}