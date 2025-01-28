document.getElementById('index').addEventListener('click', () => {
    window.location.href = 'index.html';
});


async function loadJSON() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        const tableBody = document.getElementById('data');
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
            `;
            tableBody.appendChild(row);
        })
    } catch (error) {
        console.error('DOMContentLoaded', loadJSON);
    }
}

document.addEventListener('DOMContentLoaded', loadJSON)