import { database } from "./fishData.js"

export const locationList = () => {
    let locationHTML = `<article class="locations">`

    for (const location of database.locations) {
        locationHTML += `
            <section class="location">
            <h2>${location.name}</h2>
            <h4>Country: ${location.country}</h4>
            <p>${location.description}</p>
            </section>
        `   
    }
    locationHTML +=`</article>`
    return locationHTML
}