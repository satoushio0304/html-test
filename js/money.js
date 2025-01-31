var data = [
    { id:1, name:"ハンコ", price:380 },
    { id:2, name:"病院", price:2690 },
    { id:3, name:"薬局", price:1490 }
];

// 親要素を指定する
var list = document.getElementById('list');

// 追加する要素を作成
var li = document.createElement('li');
li.innerHTML = 'a';

// 末尾に追加
list.appendChild(li);

/*
var data = JSON.parse(data);

Object.keys(data).forEach(function(i) {
    var li = document.createElement('li');
    li.textContent = data[i].name;
    document.getElementById('display').appendChild();
}
*/
