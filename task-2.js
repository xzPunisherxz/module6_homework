// Задание 2.
//
// Написать функцию, которая принимает на входе любое число (но не больше 1 000),
// определяет, является ли оно простым, и выводит простое число или нет.
//     Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
//
// Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.

function checkingNumbers (numbers) {
    if (numbers > 1000) {
        let x = "Данные не верны";
        return x;
    } else if (numbers == 0 || numbers == 1) {
        let x = "0 или 1 не является простым или стоставным числом";
        return x;
    } else {
        for (let i = 2; i < numbers; i++) {
            if (numbers % i ===0) {
                let x = "Составное число";
                return x;
                break;
            } else {
                let x = "Простое число";
                return x;
            }
        }
    }
}
let entered_number = prompt ("Введите число от 0 до 1000:");
let result = checkingNumbers (entered_number);
console.log (result)
