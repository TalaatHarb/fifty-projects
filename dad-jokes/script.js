const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const url = 'https://icanhazdadjoke.com/';
const headers = { 'Accept': 'application/json' }

jokeBtn.addEventListener('click', () => {
    generateJoke();
});

generateJoke();

async function generateJoke() {
    const res = await fetch(url, { method: 'GET', headers });
    const r = await res.json();

    joke.innerHTML = r.joke;
}