const f = x => {
    document.getElementById(x).addEventListener('click', () => {
        window.location.href = x + '.html';
    });

}
