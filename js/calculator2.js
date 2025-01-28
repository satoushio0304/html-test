f('index')

const buttons = document.querySelectorAll('.button');
const display = document.getElementById('display');

document.getElementById('1').addEventListener('click', function() {
    document.getElementById('display').textContent = this.textContent;
})
