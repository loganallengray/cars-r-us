import { addCustomOrder } from "./database.js"
import { selectInteriors } from "./interior.js"
import { listOrders } from "./orders.js"
import { selectPaints } from "./paint.js"
import { selectTechnologies } from "./technology.js"
import { selectWheels } from "./wheel.js"

// HTML
export const carsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${selectPaints()}
            </section>
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${selectInteriors()}
            </section>
            <section class="choices__technologies options">
                <h2>Technology</h2>
                ${selectTechnologies()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${selectWheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article id="orderArticle">
            <h2>Orders</h2>
            ${listOrders()}
        </article>
    `
}

// when button is clicked, run custom stateChanged event
document.addEventListener(
    "click",
    (e) => {
        const itemClicked = e.target;

        if (itemClicked.id === "orderButton") {
            addCustomOrder();
        }
    }
)