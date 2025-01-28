let display = "";





document.querySelectorAll('.button').forEach(button => {

    button.addEventListener('click', function() {

        if (this.textContent == "C") {
            display = "";
        } else if (this.textContent == "=") {
            display = result(display);
        } else {
            display += this.textContent;
        }
        document.getElementById('display').textContent = display;
    });
    
});
