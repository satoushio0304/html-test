var data = [
    { id:1, name:"ハンコ", price:380 },
    { id:2, name:"病院", price:2690 },
    { id:3, name:"薬局", price:1490 }
];


var sum = 0;

for (let i = 0; i < data.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = data[i].id;
    document.getElementById('id').appendChild(li);
}

for (let i = 0; i < data.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = data[i].name;
    document.getElementById('name').appendChild(li);
}

for (let i = 0; i < data.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = data[i].price;
    document.getElementById('price').appendChild(li);
    sum += Number(data[i].price);
}

document.getElementById('sum').textContent = sum;

