document.querySelectorAll('.title').forEach(title => {
    title.addEventListener('click', () => {
        window.location.href = title.id + '.html';
    });
});

document.getElementById('time').innerHTML = new Date();

document.getElementById('input').addEventListener('change', e => {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]); 
    reader.onload = e => {
        document.getElementById('output').innerHTML = e.target.result;
    }
});

let str = '[{"weight":1,"name":"書道"},{"weight":1,"name":"ノート"}]'
