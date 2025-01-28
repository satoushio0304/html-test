document.querySelectorAll('.title').forEach(title => {
    
    document.getElementById(title.id).addEventListener('click', () => {
        window.location.href = title.id + '.html';
    });

});