let count = 0;
function incrementCount() {
    count++;
    document.getElementById("count").innerText = count;
}

function navigateTo(url) {
    window.location.href = url;
}