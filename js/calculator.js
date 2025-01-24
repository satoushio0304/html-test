let num = "";

document.getElementById('index').addEventListener('click', () => {
    window.location.href = 'index.html';
});

document.getElementById('1').addEventListener('click', () => {
    num = num + "1";
    document.getElementById("num").innerText = num;
});

document.getElementById('2').addEventListener('click', () => {
    num = num + "2";
    document.getElementById("num").innerText = num;
});

document.getElementById('3').addEventListener('click', () => {
    num = num + "3";
    document.getElementById("num").innerText = num;
});

document.getElementById('div').addEventListener('click', () => {
    num = num + "/";
    document.getElementById("num").innerText = num;
});
document.getElementById('4').addEventListener('click', () => {
    num = num + "4";
    document.getElementById("num").innerText = num;
});

document.getElementById('5').addEventListener('click', () => {
    num = num + "5";
    document.getElementById("num").innerText = num;
});

document.getElementById('6').addEventListener('click', () => {
    num = num + "6";
    document.getElementById("num").innerText = num;
});

document.getElementById('mul').addEventListener('click', () => {
    num = num + "*";
    document.getElementById("num").innerText = num;
});

document.getElementById('7').addEventListener('click', () => {
    num = num + "7";
    document.getElementById("num").innerText = num;
});

document.getElementById('8').addEventListener('click', () => {
    num = num + "8";
    document.getElementById("num").innerText = num;
});

document.getElementById('9').addEventListener('click', () => {
    num = num + "9";
    document.getElementById("num").innerText = num;
});

document.getElementById('sub').addEventListener('click', () => {
    num = num + "-";
    document.getElementById("num").innerText = num;
});
document.getElementById('dec').addEventListener('click', () => {
    num = num + ".";
    document.getElementById("num").innerText = num;
});

document.getElementById('0').addEventListener('click', () => {
    num = num + "0";
    document.getElementById("num").innerText = num;
});

document.getElementById('equ').addEventListener('click', () => {
    num = num + "=";
    document.getElementById("num").innerText = num;
});

document.getElementById('add').addEventListener('click', () => {
    num = num + "+";
    document.getElementById("num").innerText = num;
});
