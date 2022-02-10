export default function addIconsNew(personalData) {

    let icons = personalData.current.condition.text
    let addIcons = = ""

    if (icons_includes("thunder") && icons.includes("rain")){
        addIcons="../assets/storm.png"

    }else if(icons.includes("thunder")){
        addIcons="../assets/thunder.png"
        
    }else if(icons.includes("rain") || icons.includes("drizzle")){
        addIcons="../assets/rainImg.png"

    }else if(icons.includes("fog") || icons.includes("mist")){
        addIcons="../assets/cloud.png"

    }else if(icons.includes("cloudy") || icons.includes("Overcast")){
        addIcons="../assets/cloudy.png"

    }else if(icons.includes("Sunny")){
        addIcons="../assets/sun.png"
    }
    return addIcons;
}