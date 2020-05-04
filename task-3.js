//Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 321, 5! = 54321. С помощью циклов вычислить факториал числа 10. Использовать for.


console.log("");
console.log("Третяя задача");

//первый вариант
let num3t = 10;
let facmass = [];
let factorial = 1;

for (let i = num3t; i>=0; i--){
    facmass.push(i);
    
}

facmass.splice(facmass.length-1);
    
for (let i = facmass.length-1; i >= 0; i--){
    factorial *= facmass[i];
}

console.log("Факториал числа 10 равен = " + factorial);




// Второй вариант 
function factorials(n){
      var res = 1;

      while (n--) {
        res *= n + 1
      }
      return res;
    }
    console.log("Факториал числа 10 равен = " + factorials(10) );
    