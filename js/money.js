document.getElementById('index').addEventListener('click', () => {
    window.location.href = 'index.html';
});

function displayData(data) {
    const tableBody = document.getElementById('data')
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
        `;
        tableBody.appendChild(row);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    displayData(data);
});
    