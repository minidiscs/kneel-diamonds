import { getSizes, setState } from "./dataAccess.js"

const sizes = getSizes()

document.addEventListener("change",(event) => {
        if (event.target.name === "sizeId") {
            setState(parseInt(event.target.value), event.target.name)
        }
    }
)

export const DiamondSizes = (stateSizeId) => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="sizeId" ${stateSizeId === size.id ? "checked" : ""} value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

