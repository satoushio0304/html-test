function money(data) {
    var sum = 0;
    for (let i = 0; i < data[1][0].length; i++) {
        var li = document.createElement('li');
        li.innerHTML = data[1][0][i];
        document.getElementById(data[0][0]).appendChild(li);
    }
    for (let i = 0; i < data[1][1].length; i++) {
        var li = document.createElement('li');
        li.innerHTML = data[1][1][i];
        document.getElementById(data[0][1]).appendChild(li);
    }
    for (let i = 0; i < data[1][2].length; i++) {
        var li = document.createElement('li');
        li.innerHTML = data[1][2][i];
        document.getElementById(data[0][2]).appendChild(li);
        sum += Number(data[1][2][i]);
    }
    document.getElementById('output').textContent = sum;
}
var data = txtToList(':id,1,2:name,ハンコ,病院:price,380,2690:');
money(data);