const data = [
    { id:1, name:"ハンコ", price:380 },
    { id:2, name:"病院", price:2690 },
    { id:3, name:"薬局", price:1490 }
];

for (let i = 0; i < data.length; i++) { 
    document.getElementById('display').appendChild(data[i].name);
}




