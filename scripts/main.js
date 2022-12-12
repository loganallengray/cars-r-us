import { carsRUs } from "./carsRUs.js";

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = carsRUs()
}

renderAllHTML()

// listen for custom event
document.addEventListener("stateChanged", e => {
    renderAllHTML()
})