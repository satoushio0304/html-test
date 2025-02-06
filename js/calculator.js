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
    }
    return c;
}

let output = "";
let point = 1;

document.querySelectorAll('.button').forEach(button => {

    button.addEventListener('click', function() {

        if (["C"].includes(this.textContent)) {
            output =  "";
            point = 1
        } else if (["←"].includes(this.textContent)) {
            if (['.'].includes(output.slice(0,-1))) { 
                point = 1
            }
            output = output.slice(0,-1);
        } else if (["="].includes(this.textContent)) {
            if (!['+','-','*','/','.'].includes(output.slice(-1))) {
                output = String(result(output));
                if (Number.isInteger(Number(output))) {
                    point = 1
                }
            }
        } else if (["."].includes(this.textContent)) {
            if (['0','1','2','3','4','5','6','7','8','9'].includes(output.slice(-1))) {
                if (point) {
                    output += this.textContent;
                    point = 0
                }
            }
        } else if (['+','*','/'].includes(this.textContent)) {
            if (['0','1','2','3','4','5','6','7','8','9'].includes(output.slice(-1))) {
                output += this.textContent;
                point = 1
            }
        } else if (['0','1','2','3','4','5','6','7','8','9'].includes(this.textContent)) {
            if (!['0'].includes(output.slice(-1))) {
                output += this.textContent;
            }
        } else {
            output += this.textContent;
        }
        document.getElementById('output').textContent = output;
    });
    
});
