import { getPaints, setPaints } from "./database.js";

const paints = getPaints();

/* 
    get paint objects
    define string with html select starting tags
    iterate through paints
    store paint data in select option form
    add closing select tag
    return html
*/

export const selectPaints = () => {
    let html = '<select id="paint-select">';
    html += '<option value="0">Select a paint option</option>'

    for (const paint of paints) {
        html += `<option value="${paint.id}">${paint.name}</option>`;
    }

    html += '</select>';
    return html;
}

/* 
    Create event listener for change
    use .find method on paints array, use value from option tags
    check if target ID is correct
    --make a window alert display a message with the property name--
    use a setter function to set the value in the database
*/

document.addEventListener("change", e => {
    if (e.target.id === "paint-select") {
        const chosenOption = paints.find(
            paint => paint.id === parseInt(e.target.value)
        );

        setPaints(chosenOption.id);
    }
})