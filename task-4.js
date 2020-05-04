//На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

console.log("");
console.log("Четвертая задача");


let str4t = 'JavaScript is a pretty good language';

let strStr4t = str4t.split(' ');    //Разбиваем на отдельные слова                                  
let UpperText4t = [];

    for(var i = 0; i < strStr4t.length; i++){ 
    let word = strStr4t[i][0].toUpperCase() + strStr4t[i].slice(1);     //Записываем в переменную каждое отдельно слово с большой буквы
    UpperText4t.push(word);}                                          // добавляем в новый массив каждое слово


console.log(UpperText4t.join(""));                                   // обьяденяем массив в строку