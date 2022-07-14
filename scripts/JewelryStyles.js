import { getStyles, setState } from "./database.js"

const styles = getStyles()

document.addEventListener("change",(event) => { 
        if (event.target.name === "styleId") {
            setState(parseInt(event.target.value), event.target.name)
        }
    }
)

export const JewelryStyles = (stateStyleId) => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listStyles = styles.map(style =>
        `<li> <input type="radio" name="styleId" ${stateStyleId === style.id ? "checked" : ""} value="${style.id}"/> ${style.style} </li>`
        )

    // Join all of the strings in the array into a single string
    html += listStyles.join("")

    html += "</ul>"
    return html
}

