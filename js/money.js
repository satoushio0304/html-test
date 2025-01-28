document.getElementById('index').addEventListener('click', () => {
    window.location.href = 'index.html';
});

const data = [
    { id:1, name:"ハンコ", price:380 },
    { id:2, name:"病院", price:2690 },
    { id:3, name:"薬局", price:1490 }
];

const display = document.getElementById('display');

display.textContent = data[0].name;