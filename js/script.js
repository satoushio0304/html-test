const calculate = (formula) => {
    formula = formula.map(v => Array.isArray(v) ? calculate(v) : v);
    if (formula[1] === '+') formula = Number(formula[0]) + Number(formula[2]);
    else if (formula[1] === '-') formula = Number(formula[0]) - Number(formula[2]);
    else if (formula[1] === '*') formula = Number(formula[0]) * Number(formula[2]);
    else if (formula[1] === '/') formula = Number(formula[0]) / Number(formula[2]);
    return [String(formula)];
}
const nesting = (formula, operators) => formula.reduce((newFormula, v, i, array) => operators.includes(array[i - 1]) ? [...newFormula.slice(0, -2), [newFormula.at(-2), newFormula.at(-1), v]] : [...newFormula, v],[]);
const isNumber = (char) => !isNaN(char) && char !== '' && (char.slice(-1) !== '.');
const isInteger = (char) => isNumber(char) && char.indexOf('.') == -1;
const isOperator = (char) => "+-*/".includes(char);
let formula = [];
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'C') formula = [];
        else if (button.textContent === '←' && formula.length) formula = formula.at(-1).length === 1 ? [...formula.slice(0, -1)] : [...formula.slice(0, -1), formula.at(-1).slice(0, -1)];
        else if (button.textContent === '=') formula = calculate(nesting(nesting(formula, '/*'), '+-'));
        else if (isNumber(button.textContent)) formula = !formula.length || (isOperator(formula.at(-1)) && isNumber(formula.at(-2))) ? [...formula, button.textContent] : formula.at(-1) !== '0' ? [...formula.slice(0, -1), formula.at(-1) + button.textContent] : [...formula];
        else if (button.textContent === '.' && isInteger(formula.at(-1))) formula = [...formula.slice(0, -1), formula.at(-1) + button.textContent];
        else if (button.textContent === '-' && (!formula.length || '+/*'.includes(formula.slice(-1)))) formula = [...formula, button.textContent];
        else if (isOperator(button.textContent) && isNumber(formula.at(-1))) formula = [...formula, button.textContent];
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

document.getElementById('time').innerHTML = new Date().toLocaleString({ timeZone: 'Asia/Tokyo' });
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
