const insert = document.getElementById('insert');


window.addEventListener('keydown', (event) => {
    let key = event.key;
    const keyCode = event.keyCode;
    const code = event.code;

    // Special cases for key
    if (key === ' ') key = 'Space';

    insert.innerHTML = `
        <div class="key">
            ${key}
            <small>event.key</small>
        </div>

        <div class="key">
            ${keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="key">
            ${code}
            <small>event.code</small>
        </div>
    `;
});