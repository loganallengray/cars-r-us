const database = {
    paints: [
        {id: 1, name: "Silver", price: 100},
        {id: 2, name: "Midnight Blue", price: 250},
        {id: 3, name: "Firebrick Red", price: 500},
        {id: 4, name: "Spring Green", price: 300},
    ],
    interiors: [
        {id: 1, name: "Beige Fabric", price: 100},
        {id: 2, name: "Charcoal Fabric", price: 150},
        {id: 3, name: "White Leather", price: 300},
        {id: 4, name: "Black Leather", price: 350},
    ],
    technologies: [
        {id: 1, name: "Basic Package", price: 300},
        {id: 2, name: "Navigation Package", price: 500},
        {id: 3, name: "Visibility Package", price: 750},
        {id: 4, name: "Ultra Package", price: 1500},
    ],
    wheels: [
        {id: 1, name: "17-inch Pair Radial", price: 300},
        {id: 2, name: "17-inch Pair Radial Black", price: 350},
        {id: 3, name: "18-inch Pair Spoke Silver", price: 500},
        {id: 4, name: "18-inch Pair Spoke Black", price: 550},
    ],
    customOrders: [
        {
            id: 1, 
            paintId: 1,
            interiorId: 1,
            technologyId: 1,
            wheelId: 1,
            timestamp: 127212271
        },
    ],
    orderBuilder: {
        paintId: 0,
        interiorId: 0,
        technologyId: 0,
        wheelId: 0,
    }
}

// getters
export const getPaints = () => {
    return database.paints.map(paint => ({...paint}));
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}));
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}));
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}));
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}));
}

// setters
export const setPaints = (id) => {
    database.orderBuilder.paintId = id;
}

export const setInteriors = (id) => {
    database.orderBuilder.interiorId = id;
}

export const setTechnologies = (id) => {
    database.orderBuilder.technologyId = id;
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id;
}

// adds custom order to custom order list
// creates custom event
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}