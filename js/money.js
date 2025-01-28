document.getElementById('index').addEventListener('click', () => {
    window.location.href = 'index.html';
});

const data = [
    { id:1, name:"ハンコ", price:380 },
    { id:2, name:"病院", price:2690 },
    { id:3, name:"薬局", price:1490 }
];

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
    