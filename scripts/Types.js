import { setType } from "./database.js"

document.addEventListener("change",(event) => { 
    if (event.target.name === "type") {
        setType(parseInt(event.target.value))
    }
}
)

export const JewelryTypes = () => {
    let html = `
    <input type="radio" name="type" value="1" /> Ring </li>
    <input type="radio" name="type" value="2" /> Earring </li>
    <input type="radio" name="type" value="3" /> Necklace </li>`

    return html
}