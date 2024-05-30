import { fishList } from "./fishList.js"
import { tipList } from "./tipList.js"
import { locationList } from "./locationList.js"
import { renderInfo } from "./renderInfo.js"
import { mostHolyFish, regularFish, soldierFish } from "./fishSorter.js"

// Generate the fish list
const holyFish = mostHolyFish()
const armyFish = soldierFish()
const regFish = regularFish()
const fishHTML = `${holyFish}${armyFish}${regFish}`
// Generate the care tips
const tipHTML = tipList()

//  Generate the location list
const locationHTML = locationList()

//Render each HTML string to the correct DOM element
renderInfo(fishHTML, "fishList")

renderInfo(tipHTML, "tipList")

renderInfo(locationHTML, "locationList")