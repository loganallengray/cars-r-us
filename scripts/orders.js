import { getOrders, getInteriors, getPaints, getTechnologies, getWheels } from "./database.js";

const paints = getPaints();
const interiors = getInteriors();
const technologies = getTechnologies();
const wheels = getWheels();

// functions used to find the prices
const pricePaints = (orderId) => {
    for (const paint of paints) {
        if (paint.id === orderId) {
            return paint.price;
        }
    }
}

const priceInteriors = (orderId) => {
    for (const interior of interiors) {
        if (interior.id === orderId) {
            return interior.price;
        }
    }
}

const priceTechnologies = (orderId) => {
    for (const technology of technologies) {
        if (technology.id === orderId) {
            return technology.price;
        }
    }
}

const priceWheels = (orderId) => {
    for (const wheel of wheels) {
        if (wheel.id === orderId) {
            return wheel.price;
        }
    }
}

// use .map to iterate through the orders and display the orders
export const listOrders = () => {
    // HAS TO BE DEFINED INSIDE FUNCTION
    const orders = getOrders();

    // call all the get price functions and add up to get the total cost
    const totalCost = (order) => {
        let total = 0;
        total += pricePaints(order.paintId);
        total += priceInteriors(order.interiorId);
        total += priceTechnologies(order.technologyId);
        total += priceWheels(order.wheelId);

        return total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
    }

    return orders.map(order => (
        `<section>Order #${order.id} was placed on ${order.timestamp}, and costs ${totalCost(order)}</section>`
    )).join("\n")
}