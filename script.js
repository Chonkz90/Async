/*
console.log("Starting Javascript")

while(true) {
    console.log("New Turn")
await waitFor()
}

console.log("Done")

async function waitFor() {
    return new Promise( (resolve) => {
        setTimeout(() => {resolve()}, 3000)
    })
}
*/
const apiUrl = "https://ghibliapi.vercel.app/films/"

const response = await fetch(apiUrl)
const data = await response.json()
console.log(data)

const movieListElement = document.querySelector("#movie-list")
console.log(movieListElement)

for (const movie of data) {
    console.log(movie)

    const movieCard = document.createElement("li")
    movieCard.textContent = movie.title

    movieListElement.append(movieCard)
}