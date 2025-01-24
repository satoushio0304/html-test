let str1 = "";
let str2 = "";
let str3 = "";

document.getElementById('index').addEventListener('click', () => {
    window.location.href = 'index.html';
});

document.getElementById('0').addEventListener('click', () => {
    str1 = str1 + "0";
    document.getElementById("str1").innerText = str1;
});

document.getElementById('1').addEventListener('click', () => {
    str1 = str1 + 1;
    document.getElementById("str1").innerText = str1;
});

document.getElementById('2').addEventListener('click', () => {
    str1 = str1 + "2";
    document.getElementById("str1").innerText = str1;
});

document.getElementById('3').addEventListener('click', () => {
    str1 = str1 + "3";
    document.getElementById("str1").innerText = str1;
});

document.getElementById('4').addEventListener('click', () => {
    str1 = str1 + "4";
    document.getElementById("str1").innerText = str1;
});

document.getElementById('5').addEventListener('click', () => {
    str1 = str1 + "5";
    document.getElementById("str1").innerText = str1;
});

document.getElementById('6').addEventListener('click', () => {
    str1 = str1 + "6";
    document.getElementById("str1").innerText = str1;
});

document.getElementById('7').addEventListener('click', () => {
    str1 = str1 + "7";
    document.getElementById("str1").innerText = str1;
});

document.getElementById('8').addEventListener('click', () => {
    str1 = str1 + "8";
    document.getElementById("str1").innerText = str1;
});

document.getElementById('9').addEventListener('click', () => {
    str1 = str1 + "9";
    document.getElementById("str1").innerText = str1;
});

document.getElementById('dec').addEventListener('click', () => {
    str1 = str1 + ".";
    document.getElementById("str1").innerText = str1;
});

document.getElementById('add').addEventListener('click', () => {
    str3 = str1;
    str2 = "+";
    str1 = "";
    document.getElementById("str1").innerText = str1;
    document.getElementById("str2").innerText = str2;
    document.getElementById("str3").innerText = str3;
});

document.getElementById('sub').addEventListener('click', () => {
    str3 = str1;
    str2 = "-";
    str1 = "";
    document.getElementById("str1").innerText = str1;
    document.getElementById("str2").innerText = str2;
    document.getElementById("str3").innerText = str3;
});

document.getElementById('mul').addEventListener('click', () => {
    str3 = str1;
    str2 = "*";
    str1 = "";
    document.getElementById("str1").innerText = str1;
    document.getElementById("str2").innerText = str2;
    document.getElementById("str3").innerText = str3;
});

document.getElementById('div').addEventListener('click', () => {
    str3 = str1;
    str2 = "/";
    str1 = "";
    document.getElementById("str1").innerText = str1;
    document.getElementById("str2").innerText = str2;
    document.getElementById("str3").innerText = str3;
});

document.getElementById('lef-par').addEventListener('click', () => {
    str1 = str1 + "(";
    document.getElementById("str1").innerText = str1;
});

document.getElementById('rig-par').addEventListener('click', () => {
    str1 = str1 + ")";
    document.getElementById("str1").innerText = str1;
});

document.getElementById('cle').addEventListener('click', () => {
    str1 = "";
    document.getElementById("str1").innerText = str1;
});

document.getElementById('all-cle').addEventListener('click', () => {
    str1 = "";
    document.getElementById("str1").innerText = str1;
});

document.getElementById('equ').addEventListener('click', () => {
    str1 = str1 + "=";
    document.getElementById("str1").innerText = str1;
});