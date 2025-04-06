// 時間情報
document.getElementById('time').innerHTML = new Date().toLocaleString({ timeZone: 'Asia/Tokyo' });

// タイトルリンク
document.querySelectorAll('.title').forEach(title => {
    title.addEventListener('click', () => {
        window.location.href = title.id + '.html';
    });
});


// 電卓
const calculate = (formula) => {
    formula = formula.map(v => Array.isArray(v) ? calculate(v) : v);
    if (formula[1] === '+') formula = Number(formula[0]) + Number(formula[2]);
    else if (formula[1] === '-') formula = Number(formula[0]) - Number(formula[2]);
    else if (formula[1] === '*') formula = Number(formula[0]) * Number(formula[2]);
    else if (formula[1] === '/') formula = Number(formula[0]) / Number(formula[2]);
    return [String(formula)];
}

const formulaTree = (formula, operators) => formula.reduce((newFormula, v, i, array) => operators.includes(array[i - 1]) ? [...newFormula.slice(0, -2), [newFormula.at(-2), newFormula.at(-1), v]] : [...newFormula, v], []);
const isNumber = (char) => !isNaN(char) && char !== '' && (char.slice(-1) !== '.');
const isInteger = (char) => isNumber(char) && char.indexOf('.') == -1;
const isOperator = (char) => "+-*/".includes(char);

let formula = [];

document.querySelectorAll('.calculator-button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'C') formula = [];
        else if (button.textContent === '←' && formula.length) formula = formula.at(-1).length === 1 ? [...formula.slice(0, -1)] : [...formula.slice(0, -1), formula.at(-1).slice(0, -1)];
        else if (button.textContent === '=') formula = calculate(formulaTree(formulaTree(formula, '/*'), '+-'));
        else if (isNumber(button.textContent)) formula = !formula.length || (isOperator(formula.at(-1)) && isNumber(formula.at(-2))) ? [...formula, button.textContent] : formula.at(-1) !== '0' ? [...formula.slice(0, -1), formula.at(-1) + button.textContent] : [...formula];
        else if (button.textContent === '.' && isInteger(formula.at(-1))) formula = [...formula.slice(0, -1), formula.at(-1) + button.textContent];
        else if (button.textContent === '-' && (!formula.length || '+/*'.includes(formula.slice(-1)))) formula = [...formula, button.textContent];
        else if (isOperator(button.textContent) && isNumber(formula.at(-1))) formula = [...formula, button.textContent];
        document.getElementById('formula').textContent = formula.join('');
    });
});


// 家計簿
let data;
let addData;
let nulldata = {"id":"","name":"","price":""};
let sum = 0;

const showData = (data) => {

    data.forEach(obj => {
        keys = Object.keys(obj);
        keys.forEach(key => {
            let item = document.createElement('button');
            item.innerHTML = obj[key];
            document.getElementById('items').appendChild(item);
        });
    });

    data.forEach(obj => {
        keys = ['price'];
        keys.forEach(key => {
            sum += Number(obj[key]);
            console.log(sum);
        });
    });
    document.getElementById('sum').innerHTML = sum;
};

const downloadData = (data) => {
    data = JSON.stringify(data, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

document.getElementById('upload').addEventListener('change', e => {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = e => {
        data = e.target.result;
        data = JSON.parse(data);
        showData(data);
    };
});

document.getElementById('add').addEventListener('click', () => {
    addId = document.getElementById('add-id').value;
    addName = document.getElementById('add-name').value;
    addPrice = document.getElementById('add-price').value;
    addData = {id : addId, name : addName, price : addPrice};
    showData([addData]);
    data.push(addData);
    document.getElementById('add-id').value = "";
    document.getElementById('add-name').value = "";
    document.getElementById('add-price').value = "";
});

document.getElementById('download').addEventListener('click', () => {
    downloadData(data);
});

document.getElementById('newfile').addEventListener('click', () => {
    downloadData(nulldata);
});




