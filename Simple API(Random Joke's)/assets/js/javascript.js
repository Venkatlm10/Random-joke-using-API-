const jokeContainer = document.getElementById("Joke");
const btn = document.getElementById("butt-on");
const url = "https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=political,racist,explicit&type=single";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
    });
}
btn.addEventListener("click",getJoke);
getJoke();