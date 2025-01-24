document.getElementById('index').addEventListener('click', () => {
    window.location.href = 'index.html';
});

const buttons = document.querySelectorAll('.button');
const display = document.getElementById('display');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        display.textContent = this.textContent;
    });
});