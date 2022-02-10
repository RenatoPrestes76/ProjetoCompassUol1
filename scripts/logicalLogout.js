export default function logicalLogout(){
    const $ = document.querySelector.bind(document)
    const botaoLogout = $("#logout")

    botaoLogout.addEventListener("click", ()=> {
        window.location.reload()
    })

}