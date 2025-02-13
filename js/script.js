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

const result2 = x => {
    x += ",";
    let a = "";
    let b = "*";
    let c = 1;    
    for (const i of x) {
        if (i == '*' || i == '/' || i == ','){
            if (b == '*'){
                c *= a;
                a = "";
            } else if (b == '/') {
                c /= a;
                a = "";
            }
            b = i;
        } else {
            a += i;
        }
    }
    return c;
}

const result = x => {
    x += ",";
    let a = "";
    let b = "+";
    let c = 0;
    for (const i of x) {
        if (['0','1','2','3','4','5','6','7','8','9'].includes(a.slice(-1))) {
            if (i == '+' || i == '-' || i == ','){
                a = result2(a)
                if (b == '+'){
                    c += Number(a);
                } else if (b == '-') {
                    c -= a;
                }
                a = "";
                b = i;
            } else {
                a += i;
            }       
        } else {
            a += i;
        }
    }
    return c;
}

let formula = "";
let point = 1;

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        if (["C"].includes(this.textContent)) {
            formula =  "";
            point = 1;
        } else if (["←"].includes(this.textContent)) {
            if (['.'].includes(formula.slice(0,-1))) { 
                point = 1;
            }
            formula = formula.slice(0,-1);
        } else if (["="].includes(this.textContent)) {
            if (!['+','-','*','/','.'].includes(formula.slice(-1))) {
                formula = String(result(formula));
                if (Number.isInteger(Number(formula))) {
                    point = 1;
                }
            }
        } else if (["."].includes(this.textContent)) {
            if (['0','1','2','3','4','5','6','7','8','9'].includes(formula.slice(-1))) {
                if (point) {
                    formula += this.textContent;
                    point = 0;
                }
            }
        } else if (['+','*','/'].includes(this.textContent)) {
            if (['0','1','2','3','4','5','6','7','8','9'].includes(formula.slice(-1))) {
                formula += this.textContent;
                point = 1;
            }
        } else if (['-'].includes(this.textContent)) {
            if (['0','1','2','3','4','5','6','7','8','9','*','/'].includes(formula.slice(-1))) {
                formula += this.textContent;
                point = 1
            } else if (formula == '') {
                formula += this.textContent;
                point = 1;
            }
        } else if (['0','1','2','3','4','5','6','7','8','9'].includes(this.textContent)) {
            if (!['0'].includes(formula.slice(-1))) {
                formula += this.textContent;
            }
        } else {
            formula += this.textContent;
        }
        document.getElementById('formula').textContent = formula;
    }); 
});

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
        money(txtToList(e.target.result));
    }
});

document.getElementById('download').addEventListener('click', () => {
    const data = document.getElementById('sum').innerHTML;
    const blob = new Blob([data], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
})
