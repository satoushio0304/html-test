document.addEventListener('DOMContentLoaded', () => {
    // カウンタを初期化
    let count = 0;

    // 各ボタンを取得
    const top0Button = document.getElementById('top0-button');
    const top1Button = document.getElementById('top1-button');
    const top2Button = document.getElementById('top2-button');
    const decrementButton = document.getElementById('decrement-button');
    const incrementButton = document.getElementById('increment-button');
    const countDisplay = document.getElementById('count');

    // ボタンにイベントリスナーを設定
    top0Button.addEventListener('click', () => {
        window.location.href = 'home.html'; // Homeボタンの処理
    });

    top1Button.addEventListener('click', () => {
        window.location.href = 'button.html'; // Homeボタンの処理
    });

    top2Button.addEventListener('click', () => {
        window.location.href = 'input.html'; // Homeボタンの処理
    });

    decrementButton.addEventListener('click', () => {
        count--;
        countDisplay.textContent = count; // カウントを更新
    });

    incrementButton.addEventListener('click', () => {
        count++;
        countDisplay.textContent = count; // カウントを更新
    });
});


