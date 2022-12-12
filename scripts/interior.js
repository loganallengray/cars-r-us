import { getInteriors, setInteriors } from "./database.js";

const interiors = getInteriors();

/* 
    get interior objects
    define string with html select starting tags
    iterate through interiors
    store interior data in select option form
    add closing select tag
    return html
*/

export const selectInteriors = () => {
    let html = '<select id="interior-select">';
    html += '<option value="0">Select a interior option</option>'

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.name}</option>`;
    }

    html += '</select>';
    return html;
}

/* 
    Create event listener for change
    use .find method on interiors array, use value from option tags
    check if target ID is correct
    --make a window alert display a message with the property name--
    use a setter function to set the value in the database
*/

document.addEventListener("change", e => {
    if (e.target.id === "interior-select") {
        const chosenOption = interiors.find(
            interior => interior.id === parseInt(e.target.value)
        );

        setInteriors(chosenOption.id);
    }
})