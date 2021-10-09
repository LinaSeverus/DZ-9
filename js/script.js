'use strict';

// 1

const x = 10, y = 7;
let result = x > y ? alert(`${x} больше, чем ${y}`) : alert(`${x} не больше, чем ${y}`);

// 2

// const num = prompt('Введите число');
// if (num % 2 == 0) {
//     alert(`Число ${num} четное`);
// } else {
//     alert(`Число ${num} нечетное`);
// }


// 3
// let numLengthMessage;
// const num = prompt('Введите целое число');
// let numPosNeg = num >= 0 ? 'положительное' : 'отрицательное';
// let numLength = num >= 0 ? num.length : num.length - 1;

// switch (numLength) {
//     case 1:
//         numLengthMessage = 'однозначное';
//         break;
//     case 2:
//         numLengthMessage = 'двузначное';
//         break;
//     case 3:
//         numLengthMessage = 'трехзначное';
//         break;
//     default:
//         numLengthMessage = 'Очень большое!';
// }

// alert(`Число ${num} ${numLengthMessage} ${numPosNeg}`);


// 4

// const num1 = +prompt('Введите первое число');
// const num2 = +prompt('Введите второе число');
// const num3 = +prompt('Введите третье число');

// if (num1 > num2 && num1 > num3) {
//     alert(`Число ${num1} наибольшее`);
// } else if (num2 > num1 && num2 > num3) {
//     alert(`Число ${num2} наибольшее`);
// } else {
//     alert(`Число ${num3} наибольшее`);
// }


// 4

// const numA = +prompt('Введите длину стороны А');
// const numB = +prompt('Введите длину стороны В');
// const numC = +prompt('Введите длину стороны С');

// if (numA + numB > numC && numA + numC > numB && numB + numC > numA) {
//     alert(`Треугольник получится`);
// } else {
//     alert(`Треугольник НЕ получится!`);
// }