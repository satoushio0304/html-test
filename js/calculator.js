let display = "";

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


document.querySelectorAll('.button').forEach(button => {

    button.addEventListener('click', function() {

        if (this.textContent == "C") {
            display = "";
        } else if (this.textContent == "=") {
            if (!['+','-','*','/'].includes(display.slice(-1))) {
                display = result(display);
            }
        } else {
            display += this.textContent;
        }
        document.getElementById('display').textContent = display;
    });
    
});
