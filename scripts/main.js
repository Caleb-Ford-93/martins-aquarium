import { fishList } from "./fishList.js"
import { tipList } from "./tipList.js"
import { locationList } from "./locationList.js"
import { renderInfo } from "./renderInfo.js"

// Generate the fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

//  Generate the location list
const locationHTML = locationList()

//Render each HTML string to the correct DOM element
renderInfo(fishHTML, "fishList")

renderInfo(tipHTML, "tipList")

renderInfo(locationHTML, "locationList")