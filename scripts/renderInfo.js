export const renderInfo = (html, id) => {
    const infoHTML = document.getElementById(id)

    if (infoHTML) {
        infoHTML.innerHTML = html
    } else {
        console.error(`Could not find element with id "${id}"`)
    }
}