var data = [
    { id:1, name:"ハンコ", price:380 },
    { id:2, name:"病院", price:2690 },
    { id:3, name:"薬局", price:1490 }
];



var li = document.createElement('li');
li.innerHTML = data[0].name;

document.getElementById('display').appendChild(li);

/*
var data = JSON.parse(data);

Object.keys(data).forEach(function(i) {
    var li = document.createElement('li');
    li.textContent = data[i].name;
    document.getElementById('display').appendChild();
}
*/
