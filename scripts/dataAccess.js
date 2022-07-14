import { database } from "./database.js"

export const getMetals = () => database.metals.map(metal => ({ ...metal }))
export const getSizes = () => database.sizes.map(size => ({ ...size }))
export const getStyles = () => database.styles.map(style => ({ ...style }))
export const getOrders = () => database.customOrders.map(customOrder => ({ ...customOrder }))

export const setType = (id) => database.orderBuilder.typeId = id

export const getState = () => ({...database.orderBuilder})

export const setState = (id, property) => {
    database.orderBuilder[property] = id

    // let newState = {...database.orderBuilder}
    // newState[property] = id
    // database.orderBuilder = newState
    regenerateHTML()
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder }

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    regenerateHTML()
}

//breakout last part of addCustomOrder so HTML regeneration can be called independently
const regenerateHTML = () => {
    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
