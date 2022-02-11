import logicalPassword from "./scripts/logicalPassword.js";
import logicalLogout from "./scripts/logicalLogout.js"
import logicalClock from "./scripts/logicalClock.js"
import logicalClimate from "./scripts/logicalClimate.js"
history.pushState(null, "Login - Compass", "https://renatoprestes76.github.io/ProjetoCompassUol1/Login")

logicalPassword()
logicalLogout()
logicalClimate()

setInterval(() => {
    logicalClock()
}, 1000)