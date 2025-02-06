let output = "";

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
            output =  "";
        } else if (this.textContent == "←") {
            output = output.slice(0,-1);
        } else if (this.textContent == "=") {
            if (!['+','-','*','/'].includes(output.slice(-1))) {
                output = result(output);
            }
        } else {
            output += this.textContent;
        }
        document.getElementById('output').textContent = output;
    });
    
});
