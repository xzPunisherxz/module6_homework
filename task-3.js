// Задание 3.
//
// Написать функцию, которая принимает число как аргумент и возвращает функцию,
//     которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

function sumNumbers(num1) {
    return function (num2){
        return num1 + num2;
    }
}

let number_first = +prompt("Введите любое первое число:");
let number_second = +prompt("Введите любове второе число:");
let result = sumNumbers(number_first);
console.log(result(number_second));