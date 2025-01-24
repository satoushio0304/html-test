let num = 0;

document.getElementById('index').addEventListener('click', () => {
    window.location.href = 'index.html';
});

document.getElementById('1').addEventListener('click', () => {
    num = 1;
    document.getElementById("num").innerText = num;
});

document.getElementById('increment-button').addEventListener('click', () => {
    num = 2;
    document.getElementById("num").innerText = num;
});
