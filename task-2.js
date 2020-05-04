//Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).


console.log("");
console.log("Вторвая задача");




//первый вариант 
let str2t = "tseb eht ma i";
let newStr = [];

for (let i = str2t.length-1; i >= 0; i--){
    newStr.push(str2t[i]);
}
console.log(newStr.join("")); 








//второй вариант
let str2r = "tseb eht ma i";
let str2tt = '';


for (let i = str2r.length-1; i >= 0; i--){
     str2tt += str2r[i];
}
console.log (str2tt)