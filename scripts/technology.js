import { getTechnologies, setTechnologies } from "./database.js";

const technologies = getTechnologies();

/* 
    get technology objects
    define string with html select starting tags
    iterate through technologys
    store technology data in select option form
    add closing select tag
    return html
*/

export const selectTechnologies = () => {
    let html = '<select id="technology-select">';
    html += '<option value="0">Select a technology package</option>'

    for (const technology of technologies) {
        html += `<option value="${technology.id}">${technology.name}</option>`;
    }

    html += '</select>';
    return html;
}

/* 
    Create event listener for change
    use .find method on technologies array, use value from option tags
    check if target ID is correct
    --make a window alert display a message with the property name--
    use a setter function to set the value in the database
*/

document.addEventListener("change", e => {
    if (e.target.id === "technology-select") {
        const chosenOption = technologies.find(
            technology => technology.id === parseInt(e.target.value)
        );

        setTechnologies(chosenOption.id);
    }
})