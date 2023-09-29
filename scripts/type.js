import { getTypes, setType } from "./database.js";

const types = getTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))
        }
    }
)

export const Types = () => {
    let html = "<form class='typeOfJewelery'>"

    const typesArray = types.map((type) => {
        return `<label>
            <input type="radio" name= "type" value="${type.id}">${type.type}
            </label>`
    })

    html += typesArray.join("")
    html += "</form>"
    return html
}