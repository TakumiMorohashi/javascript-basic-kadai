//変数numに0~15までのランダムな整数を代入する
num = Math.floor(Math.random() * 16);

//変数numの値を出力する（確認用）
console.log(num);

//変数numの値によって、出力する文字列を切り替える
switch (num){
    case 3:
    case 6:
    case 9:
    case 12:
        console.log('3の倍数です');
        break;
    case 5:
    case 10:
        console.log('5の倍数です');
        break;
    case 15:
        console.log('3と5の倍数です');
        break;
}