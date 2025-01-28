f('index')

const buttons = document.querySelectorAll('.button');
const display = document.getElementById('formula');


let formula = "";
let result = "";
let num = "";
let ope = "";

buttons.forEach(button => {
    button.addEventListener('click', function() {
        formula += this.textContent;
        display.textContent = formula;

        if (isOpe(this.textContent) == 1) {
            if (ope == "+") {
                result = add(result, num);
                
            } else if (ope == "-") {
                result = sub(result, num);
                
            } else {
                result = num;
            }
            num = "";
            ope = this.textContent;

        } else if (this.textContent == "=") {
            if (ope == "+") {
                result = add(result, num);
                
            } else if (ope == "-") {
                result = sub(result, num);
                
            } else {
                result = num;
            }
            
            display.textContent = result;
            formula = result;
            num = result;
            ope = this.textContent;
            
        } else if (this.textContent == "C") {
            display.textContent = 0;
            formula = 0;
            num = 0;
            ope = 0;

        }else {
            num += this.textContent;
        }
    });
});





function add(a,b) {
    return Number(a)+Number(b);
}

function sub(a,b) {
    return a-b;
}

function mul(a,b) {
    return a*b;
}

function div(a,b) {
    return a/b;
}


function isPri1(a) {
    if (a == "*") {
        return 1;
    } else if (a == "/") {
        return 1;
    } else {
        return 0;
    }
}

function isPri2(a) {
    if (a == "+") {
        return 1;
    } else if (a == "-") {
        return 1;
    } else {
        return 0;
    }
}

function isOpe(a) {
    if (isPri1(a) == 1) {
        return 1;
    } else if (isPri2(a) == 1) {
        return 1;
    } else {
        return 0;
    }
}

function isSym(a) {
    if (isOpe(a) == 1) {
        return 1;
    } else if (a == "=") {
        return 1;
    } else {
        return 0;
    }
}