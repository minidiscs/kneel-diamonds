import { getMetals, setState } from "./database.js"

const metals = getMetals()

document.addEventListener("change",(event) => { 
        if (event.target.name === "metalId") {
            setState(parseInt(event.target.value), event.target.name)
        }
    }
)

export const Metals = (stateMetalId) => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    const listStyles = metals.map(metal =>
        `<li> <input type="radio" name="metalId" ${stateMetalId === metal.id ? "checked" : ""} value="${metal.id}" /> ${metal.metal} </li>`
        )

    html += listStyles.join("")

    html += "</ul>"
    return html
}

