import { database } from "./fishData.js"

// Generate an HTML representation of each fish
export const fishList = () => {
    let fishHTML = ""

    for (const fishy of database.fish) {
        fishHTML +=`
            <article class="fish">
                <img src="${fishy.image}" alt="picture of a ${fishy.species}"
                <div class="fish_details">
                    <h2 class="fish_name">${fishy.name}</h2>
                    <p class="fish_info">${fishy.name} is a ${fishy.species} and is about ${fishy.length} inches long.</p>
                </div>
            </article>
        `
    }
    return fishHTML
}