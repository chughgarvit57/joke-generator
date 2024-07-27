const jokeContainer = document.querySelector("#joke");
const button = document.querySelector("button")
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getJoke = async () => {
    jokeContainer.classList.remove("fade")
    await fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.innerText = `${item.joke}`
        jokeContainer.classList.add("fade")
    })
}
button.addEventListener("click",getJoke);