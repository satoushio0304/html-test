g = x =>{

    document.getElementById(x).addEventListener('click', function() {
        document.getElementById('display').textContent = this.textContent;
    })
    
};

g('1')
g('2')