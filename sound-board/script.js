const buttonsContainer = document.getElementById('buttons');

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const audioElements = {};

sounds.forEach((sound, idx) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.id = idx;

    const audio = document.getElementById(sound);
    audioElements[sound] = audio;

    btn.addEventListener('click', () => {
        stopSongs();

        audioElements[sound].play();
    });

    buttonsContainer.appendChild(btn);
});

function stopSongs() {
    Object.values(audioElements).forEach((audioElement) => audioElement.pause());
}