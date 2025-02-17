const calculate = (formula) => {
    formula.forEach((v, i) => {
        if (Array.isArray(v)) formula[i] = calculate(v);
    });
    if (formula[1] === '+') formula = Number(formula[0]) + Number(formula[2]);
    if (formula[1] === '-') formula = Number(formula[0]) - Number(formula[2]);
    if (formula[1] === '*') formula = Number(formula[0]) * Number(formula[2]);
    if (formula[1] === '/') formula = Number(formula[0]) / Number(formula[2]);
    return formula;
}

const isNumber = (char) => !isNaN(char) && char !== '' && (char.slice(-1) !== '.');
const isInteger = (char) => isNumber(char) && char.indexOf('.') == -1;
const isOperator = (char) => "+-*/".includes(char);

let formula = [];

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        // 入力されたボタン button.textContent
        if (button.textContent === 'C') {
            formula = [];
        } else if (button.textContent === '←') {
            now = formula.pop().slice(0, -1);
            if (now !== '') formula.push(now);
        } else if (button.textContent === '=') {
            formula.forEach((v, i) => {
                if (v === '*' || v === '/') {
                    formula[i + 1] = [formula[i - 1], formula[i], formula[i + 1]];
                    formula[i - 1] = '';
                    formula[i] = '';
                }
            });
            formula = formula.filter(v => v !== '');
            formula.forEach((v, i) => {
                if (v === '+' || v === '-') {
                    formula[i + 1] = [formula[i - 1], formula[i], formula[i + 1]];
                    formula[i - 1] = '';
                    formula[i] = '';
                }
            });
            formula = formula.filter(v => v !== '');
            formula = calculate(formula);
        } else if (isNumber(button.textContent)) {
            if (!formula.length || (formula.length && ('+*/'.includes(formula.slice(-1)[0]))) || (formula.slice(-1)[0] === '-' && isNumber(formula.slice(-2)[0]))) formula.push(button.textContent);
            else if (formula.slice(-1)[0] !== '0' || (formula.slice(-1)[0] === '-' && '+*/'.includes(formula.slice(-2)[0]))) formula.push(formula.pop() + button.textContent);
        } else if (button.textContent === '.' && formula.length && isInteger(formula.slice(-1)[0])) {
            formula.push(formula.pop() + button.textContent);
        } else if (button.textContent === '-' && (!formula.length || '+*/'.includes(formula.slice(-1)))) {
            formula.push(button.textContent);
        } else if (isOperator(button.textContent) && isNumber(formula.slice(-1)[0])) {
            formula.push(button.textContent);
        }
        console.log(formula);
        document.getElementById('formula').textContent = formula.join('');
    });
});


const txtToList = (txtData) => {
    let key = '', keys = [], ele = '', eles = [], eless = [], cond = 1;
    for (let i of txtData) {
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
    return [keys, eless];
}

const makeLi = (data, i, j) => {
    let li = document.createElement('li');
    li.innerHTML = data[1][j][i];
    document.getElementById(data[0][j]).appendChild(li);
}

const makeSum = (data) => data.reduce((previous, current) => previous + Number(current), 0);

const money = (data) => {
    for (let j = 0; j < data[0].length; j++) {
        for (let i = 0; i < data[1][0].length; i++) {
            makeLi(data, i, j);
        }
    }
    document.getElementById('sum').textContent = makeSum(data[1][2]);
}

class Money {
    constructor() {
        document.getElementById('input').addEventListener('change', e => {
            const reader = new FileReader();
            reader.readAsText(e.target.files[0]);
            reader.onload = e => money(txtToList(e.target.result));
        });
    }
}

new Money();

document.getElementById('time').innerHTML = new Date();
document.querySelectorAll('.title').forEach(title => {
    title.addEventListener('click', () => {
        window.location.href = title.id + '.html';
    });
});


document.getElementById('download').addEventListener('click', () => {
    const data = document.getElementById('sum').innerHTML;
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
})
