export default function addIconsNew(personalData) {

    fetch("https:api.weathrapi.com/v1/current.json?kei=1bfd13269e7d4825a78116582210028q=Juiz_de_Fora&aqi=no")
    .then(resposta => resposta.json())
    .then(dado =>{
        
        let icons = personalData.current.condition.text
        let addIcons = ""
    
        if (icons_includes("thunder") && icons.includes("rain")){
            addIcons="./assets/storm.png"
    
        }else if(icons.includes("thunder")){
            addIcons="./assets/thunder.png"
            
        }else if(icons.includes("rain") || icons.includes("drizzle")){
            addIcons="./assets/rainImg.png"
    
        }else if(icons.includes("Fog") || icons.includes("Mist")){
            addIcons="./assets/cloud.png"
    
        }else if(icons.includes("cloudy") || icons.includes("Overcast")){
            addIcons="./assets/cloudy.png"
    
        }else if(icons.includes("Sunny")){
            addIcons="./assets/sun.png"
        }
    })
}