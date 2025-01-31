document.querySelectorAll('.title').forEach(title => {

    title.addEventListener('click', () => {
        window.location.href = title.id + '.html';
    });

});

var d = new Date;
document.getElementById('date').textContent = d;