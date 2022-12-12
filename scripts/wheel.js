import { getWheels, setWheels } from "./database.js";

const wheels = getWheels();

/* 
    get wheel objects
    define string with html select starting tags
    iterate through wheels
    store wheel data in select option form
    add closing select tag
    return html
*/

export const selectWheels = () => {
    let html = '<select id="wheel-select">';
    html += '<option value="0">Select a wheel option</option>'

    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.name}</option>`;
    }

    html += '</select>';
    return html;
}

/* 
    Create event listener for change
    use .find method on wheels array, use value from option tags
    check if target ID is correct
    --make a window alert display a message with the property name--
    use a setter function to set the value in the database
*/

document.addEventListener("change", e => {
    if (e.target.id === "wheel-select") {
        const chosenOption = wheels.find(
            wheel => wheel.id === parseInt(e.target.value)
        );

        setWheels(chosenOption.id);
    }
})