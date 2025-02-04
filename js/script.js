document.querySelectorAll('.title').forEach(title => {
    title.addEventListener('click', () => {
        window.location.href = title.id + '.html';
    });
});

document.getElementById('time').innerHTML = new Date();

let str = '[{"weight":1,"name":"書道"},{"weight":1,"name":"ノート"}]';

let keys_list = [];
let keys = [];
let key = '';
 
let vals_list = [];
let vals = [];
let val = '';

let state = 0;

let x = [];

function put(a, b) {
    if (typeof(a) === 'string') {
        if ((a[0] == '"') && (a.slice(-1) == '"')) {
            a = a.slice(1,-1);
        }
        b.push(a);
        a = '';
    } else if (Array.isArray(a)) {
        b.push(a);
        a = [];
    }
    return a, b;
}

for (const i of str) {
    if (state == 0) {
        if (i == '[') {
            state = 1;
        }
    } else if (state == 1) {
        if (i == '{') {
            state = 2;
        }  
    } else if (state == 2) {
        if (i == '"') {
            state = 3;
        }  
    } else if (state == 3) {
        if (i == '"') {
            key, keys = put(key, keys);
            state = 4;
        } else {
            key += i;
        }
    } else if (state == 4) {
        if (i == ':') {
            state = 5;
        }  
    } else if (state == 5) {
        if (i == ',') {
            val, vals = put(val, vals);
            state = 6;
        } else if (i == '}') {
            val, vals = put(val, vals);
            vals, vals_list = put(vals, vals_list);
            keys, keys_list = put(keys, keys_list);
            state = 7;
        } else {
            val += i;
        }
    } else if (state == 6) {
        if (i == '"') {
            state = 3;
        }  
    } else if (state == 7) {
        if (i == ',') {
            state = 8;
        } else if (i == ']') {
            state = 9;
        }  
    } else if (state == 8) {
        if (i == '{') {
            state = 2;
        }  
    }

}


console.log(keys);
console.log(vals);

console.log(keys_list);
console.log(vals_list);

x.push(keys_list)

document.getElementById('output').innerHTML = x;

document.getElementById('input').addEventListener('change', e => {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]); 
    reader.onload = e => {
        // document.getElementById('output').innerHTML = e.target.result;
    }
});
