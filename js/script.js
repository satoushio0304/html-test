// str to list
const txtToList = (txtData) => {
    let key = '',keys = [], ele = '', eles = [], eless = [], cond = 1;
    for (let i of txtData ) {
        switch (cond) {
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


const makeLi = (data, i, j) => {
    let li = document.createElement('li');
    li.innerHTML = data[1][j][i];
    document.getElementById(data[0][j]).appendChild(li);
}

const makeSum = (data) => data.reduce((previous, current) => previous + Number(current), 0);

// list to html
const money = (data) => {
    for (let j = 0; j < data[0].length; j++) {
        for (let i = 0; i < data[1][0].length; i++) {
            makeLi(data, i, j);
        }
    }
    document.getElementById('sum').textContent = makeSum(data[1][2]);
}

const result2 = x => {
    let a = "", b = "*", c = 1;
    x += ",";
    for (const i of x) {
        if ('*/,'.includes(i)){
            c = b === '*' ? c * a : c / a;
            a = "";
            b = i;
        } else {
            a += i;
        }
    }
    return c;
}

const result = x => {
    let a = "", b = "+", c = 0;
    x += ",";
    for (const i of x) {
        if (/[\d.]/.test(num.slice(-1))) {
            if ('+-,'.includes(i)){
                a = result2(a)
                c = b === '+' ? c + Number(a) : c - a;
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

class Calculator {
    constructor() {
        this.formula = "";
        this.point = 1;
        this.init();
    }

    init() {
        document.querySelectorAll('.button').forEach(button => {
            button.addEventListener('click', () => this.handleButton(button.textContent));
        });
    }

    handleButton(input) {
        if (input === "C") {
            this.reset();
        } else if (input === "←") {
            this.backspace();
        } else if (input === "=") {
            this.calculate();
        } else if (input === "." && this.canAddDecimal()) {
            this.formula += input;
            this.point = 0;
        } else if ('+*/'.includes(input) && this.canAddOperator()) {
            this.formula += input;
            this.point = 1;
        } else if (input === "-" && this.canAddMinus()) {
            this.formula += input;
            this.point = 1;
        } else if (/\d/.test(input) && this.canAddNumber(input)) {
            this.formula += input;
        }
        document.getElementById('formula').textContent = this.formula;
    }

    reset() {
        this.formula = "";
        this.point = 1;
    }

    backspace() {
        if (this.formula.endsWith(".")) this.point = 1;
        this.formula = this.formula.slice(0, -1);
    }

    calculate() {
        if (!/[\+\-\*\/\.]$/.test(this.formula)) {
            this.formula = String(result(this.formula));
            if (Number.isInteger(Number(this.formula))) this.point = 1;
        }
    }

    canAddDecimal() {
        return /\d$/.test(this.formula) && this.point;
    }

    canAddOperator() {
        return /\d$/.test(this.formula);
    }

    canAddMinus() {
        return /\d|\*|\/$/.test(this.formula) || this.formula === '';
    }

    canAddNumber(input) {
        return !(input === "0" && this.formula.endsWith("0"));
    }
}

// クラスのインスタンス生成
new Calculator();

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
    reader.onload = e => money(txtToList(e.target.result));
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
