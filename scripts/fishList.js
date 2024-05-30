import { database } from "./fishData.js"

// Generate an HTML representation of each fish
export const fishList = (fishArr) => {
    const currentFishArr = fishArr
    let fishHTML = ``

    for (const fishy of currentFishArr) {
        fishHTML +=`
            <article class="fish">
                <img class="fish_pic" src="${fishy.image}" alt="picture of a ${fishy.species}">
                <div class="fish_details">
                    <h2 class="fish_name">${fishy.name}</h2>
                    <p class="fish_info">${fishy.name} is a ${fishy.species} and is about ${fishy.length} inches long.</p>
                </div>
            </article>
        `;
    }
    return fishHTML
}