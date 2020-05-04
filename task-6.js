/*

Дан объект:

let list = {
     name: ‘denis’,
     work: ‘easycode’,
     age: 29
}
Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

*/
console.log("");
console.log("Шестая задача");

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}

for (let kay in list) {
    let upList = (String(list[kay])).toUpperCase();
    list[kay] = upList;
}
console.log(list);

