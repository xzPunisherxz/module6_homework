// Задание 1.
//
// В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
//
//     Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
//     Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
//
//     При выполнении задания необходимо учесть, что массив может содержать не только числа, но и,
//     например, знаки, null и так далее.
//
//     На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название,
//     вызовите функцию, проанализируйте синтаксис.
let arr = [23, null, "five", 2, 53, 10, 12, 17]
function getElementsNumbers(arr){
    let even_number = 0;
    let odd_number = 0;
    let zero = 0;
    let other = 0;
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (arr [i] === 0) {
                zero++;
            } else if (arr [i] % 2 === 0) {
                even_number++;
            } else {
                odd_number++;
            }
        } else {
            other++;
        }
    }
        console.log("четных элементов:" + odd_number);
        console.log("нечетных элементов:" + even_number);
        console.log("нулей:" + zero);
        console.log("других элементов:" + other);

    }
    getElementsNumbers(arr)