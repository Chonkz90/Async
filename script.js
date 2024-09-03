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

    const movieCard = createMovieCard(movie)
    const poster = movieCard.querySelector

    movieCard.textContent = movie.title

    movieListElement.append(movieCard)
}

const templateString = `
    <img>
    <p class="title"></p>`

function createMovieCard(movie){
    const movieCard = document.createElement("li")
    movieCard.className = "movie-card"

    const titleElement = document.createElement("p")
    titleElement.textContent = movie.title
    titleElement.className = "title"

    const posterElement = document.createElement("img")
    posterElement.src = movie.image

    movieCard.append(posterElement)
    movieCard.append(titleElement)

    movieCard.innerHTML= templateString

    const poster = movieCard.querySelector("img")
    poster.src= movie.image

    const title = movieCard.querySelector(".title")
    title.textContent = movie.title

    
    for (const people of movie.people) {

    }

    return movieCard
}