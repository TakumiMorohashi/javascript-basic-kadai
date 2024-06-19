//textというidを持つHTML要素を取得し、定数に代入する
const Text = document.getElementById('text');

//btnというidを持つHTML要素を取得し、定数に代入する
const Btn = document.getElementById('btn');


Btn.addEventListener('click', () => {
    setTimeout(() => {
    Text.textContent = 'ボタンをクリックしました';
}, 2000);
});