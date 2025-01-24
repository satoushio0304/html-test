let num = 0;

document.getElementById('index').addEventListener('click', () => {
    window.location.href = 'index.html';
});

document.getElementById('decrement-button').addEventListener('click', () => {
    num--;
    document.getElementById("num").innerText = num;
});

document.getElementById('increment-button').addEventListener('click', () => {
    num++;
    document.getElementById("num").innerText = num;
});
