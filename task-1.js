/*На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.*/

console.log("Первая задача");


let str = 'i am in the easycode';

let strStr = str.split(' ');    //Разбиваем на отдельные слова                                  
let UpperText = [];

    for(var i = 0; i < strStr.length; i++){ 
    let word = strStr[i][0].toUpperCase() + strStr[i].slice(1);     //Записываем в переменную каждое отдельно слово с большой буквы
    UpperText.push(word);}                                          // добавляем в новый массив каждое слово


console.log(UpperText.join(" "));                                   // обьяденяем массив в строку



//Второй вариант 

var str1t = "I am in the easycode";
var strb = '';
for (var i = 0; i < str1t.length; i++) {
  strb += (str1t[i - 1] == ' ') ? str1t[i].toUpperCase() : str1t[i];
}
console.log(strb);
