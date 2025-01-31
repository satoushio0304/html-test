const data = [
    { id:1, name:"ハンコ", price:380 },
    { id:2, name:"病院", price:2690 },
    { id:3, name:"薬局", price:1490 }
];


const itemList = document.getElementById("itemList");
const addButton = document.getElementById("addButton");
const loadButton = document.getElementById("loadButton");
const newItemInput = document.getElementById("newItem");

// アイテムをローカルストレージに保存する
function saveListToLocalStorage(list) {
    const jsonList = JSON.stringify(list); // 配列をJSON文字列に変換
    localStorage.setItem("myList", jsonList); // ローカルストレージに保存
}

// ローカルストレージからリストを読み込む
function loadListFromLocalStorage() {
    const jsonList = localStorage.getItem("myList");
    return jsonList ? JSON.parse(jsonList) : []; // JSON文字列を配列に戻す
}

// リストを画面に表示
function displayList(list) {
    itemList.innerHTML = ""; // 既存のリストをクリア
    list.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        itemList.appendChild(li);
    });
}

// アイテム追加ボタンの処理
addButton.addEventListener("click", function() {
    const newItem = newItemInput.value;
    if (newItem) {
        const list = loadListFromLocalStorage(); // 現在のリストを取得
        list.push(newItem); // 新しいアイテムを追加
        saveListToLocalStorage(list); // 更新されたリストをローカルストレージに保存
        displayList(list); // 画面に表示
        newItemInput.value = ""; // 入力フィールドをクリア
    }
});

// リスト読み込みボタンの処理
loadButton.addEventListener("click", function() {
    const list = loadListFromLocalStorage();
    displayList(list); // ローカルストレージから読み込んだリストを表示
});



