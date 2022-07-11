import { getMetals } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
    }
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    const listStyles = metals.map(metal => `<li> <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal} </li>`)

    html += listStyles.join("")

    html += "</ul>"
    return html
}

