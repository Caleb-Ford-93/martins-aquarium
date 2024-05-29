import { database } from "./fishData.js"

export const tipList = () => {
    let tipHTML = `
        <h2>Care tips</h2>
        <ul class="tips">
    `

    for (const tip of database.tips) {
        tipHTML += `
            <li class="tip">${tip.text}</li>
        `
    }
    tipHTML += `</ul>`
    return tipHTML
}