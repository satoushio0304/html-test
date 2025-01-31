var data = [
    { id:1, name:"ハンコ", price:380 },
    { id:2, name:"病院", price:2690 },
    { id:3, name:"薬局", price:1490 }
];

var data = JSON.parse(data);

Object.keys(data).forEach(function(i) {
    data[i].name;

document.getElementById('display') = document.createTextNode(data[i].price)