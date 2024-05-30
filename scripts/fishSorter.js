import { database } from "./fishData.js"
import { fishList } from "./fishList.js"

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fishy of database.fish) {
        if (fishy.length % 3 === 0) {
            holyFish.push(fishy)
        }
    }
    return fishList(holyFish)
}



export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const armyFish = []
    for (const fishy of database.fish) {
        if (fishy.length % 5 === 0 && fishy.length % 3 != 0) {
            armyFish.push(fishy)
        }
    }
    return fishList(armyFish)
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    const regFish = []
    for (const fishy of database.fish) {
        if (fishy.length % 5 != 0 && fishy.length % 3 != 0) {
            regFish.push(fishy)
        }
    }
    return fishList(regFish)
}