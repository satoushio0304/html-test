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
