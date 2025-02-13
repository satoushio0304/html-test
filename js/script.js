// str to list
function txtToList(txtData) {
    let key = '';
    let keys = [];
    let ele = '';
    let eles = [];
    let eless = [];
    let cond = 0;
    for (let i of txtData ) {
        switch (cond) {
            case 0:
                if ([':'].includes(i)) {
                    cond = 1;
                } else {
                    throw new Error("ファイルの中身が正しくありません");
                }
                break;
            case 1: // key入力中
                if ([','].includes(i)) {
                    cond = 2;
                    keys.push(key);
                    key = '';
                } else {
                    key += i;
                }
                break;
            case 2: // ele入力中 
                if ([':'].includes(i)) {
                    cond = 1;
                    eles.push(ele);
                    ele = '';
                    eless.push(eles);
                    eles = [];
                } else if ([','].includes(i)) {
                    eles.push(ele);
                    ele = '';
                } else {
                    ele += i;
                }
                break;
        }
    }
    console.log(keys);
    console.log(eless);
    return [keys,eless];
}

// list to html
function money(data) {
    var sum = 0;
    for (let i = 0; i < data[1][0].length; i++) {
        var li = document.createElement('li');
        li.innerHTML = data[1][0][i];
        document.getElementById(data[0][0]).appendChild(li);
    }
    for (let i = 0; i < data[1][1].length; i++) {
        var li = document.createElement('li');
        li.innerHTML = data[1][1][i];
        document.getElementById(data[0][1]).appendChild(li);
    }
    for (let i = 0; i < data[1][2].length; i++) {
        var li = document.createElement('li');
        li.innerHTML = data[1][2][i];
        document.getElementById(data[0][2]).appendChild(li);
        sum += Number(data[1][2][i]);
    }
    document.getElementById('sum').textContent = sum;
}

// if class = title , id to link
document.querySelectorAll('.title').forEach(title => {
    title.addEventListener('click', () => {
        window.location.href = title.id + '.html';
    });
});

// ページを開いた時の時刻を表示
document.getElementById('time').innerHTML = new Date();

// ファイルが入れられたら
document.getElementById('input').addEventListener('change', e => {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]); 
    reader.onload = e => {
        // 入力したファイルの文字列をそのまま出力
        // document.getElementById('output').innerHTML = e.target.result;
        // 入力したファイルの文字列を配列にして出力
        // document.getElementById('output').innerHTML = txtToList(e.target.result);
        // 入力した文字列を箇条書きで出力
        money(txtToList(e.target.result));
    }
});