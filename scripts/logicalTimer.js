export default function logicalTimer(){

    const $ = document.querySelector.bind(document)
    const segundos = $("#time-box")
    let contador = 600
    
    setInterval(() => {
        segundos.textContent = contador
        contador--
        if(contador === 0){
            history.pushState(null, "Login - Compass", "https://renatoprestes76.github.io/ProjetoCompassUol1")
            window.location.reload()
        }
    },1000)
}