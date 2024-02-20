// Задание 1:
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] 10) {
        console.log(arr[i        break;
    }
    console.log[i]);
}

// Задание 2:
let arr = [1, 5, 4, 10, 0, 3];
let index = arr.indexOf(4);

if (index !== -1) {
    console.log("озиция числа 4 в массиве: " + index);
} else {
    console.log("Число 4 не найдено в массиве.");
}

// Задание 3:
let numbers = [1, 3, 5, 10, 20];
let result = numbers.join(' ');
console.log(result);

// Задание 4:
let rows = 3;
let cols = 3;
let multiArray = [];

for (let i = 0; i < rows; i++) {
    let innerArray = [];
    for (let j = 0; j < cols; j++) {
        innerArray.push(1);
    }
    multiArray.push(innerArray);
}

console.log(multiArray);

// Задание 5:
let arr = [1, 1, 1];
arr.push(2, 2, 2);

console.log(arr); 

// Задание 6:
let arr = [9, 8, 7, 'a', 6, 5];

arr.sort((a, b) => a - b);

arr = arr.filter(item => typeof item === 'number');

console.log(arr);

// Задание 7:
let numbers = [9, 8, 7, 6, 5];
let userGuess = prompt("Угадай число из массива [9, 8, 7, 6, 5]:");

if (numbers.includes(parseInt(userGuess))) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

// Задание 8:
let str = 'abcdef';
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr);

// Задание 9:
const array = [[1, 2, 3], [4, 5, 6]];
const flatArray = array.flat();

console.log(flatArray);

// Задание 10:
let numbers = [3, 7, 2, 8, 5, 1, 9, 4, 6, 10];

for (let i = 0; i < numbers.length - 1; i++) {
    let sum = numbers[i] + numbers[i + 1];
    console.log(`Сумма ${numbers[i]} и ${numbers[i + 1]} равна ${sum}`);
}

// Задание 11:
function squareNumbers(arr) {
    return arr.map(num => num * num);
}

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = squareNumbers(numbers);
console.log(squaredNumbers); // Выведет: [1, 4, 9, 16, 25]

// Задание 12:
function getLengthWords(arr) {
    return arr.map(word => word.length);
}

console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква'])); // [5, 0, 4, 19, 5]

// Задание 13:
function filterPositive(array) {
  return array.filter(item => item < 0);
}

console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10]
console.log(filterPositive([-25, 25, 0, -1000, -2])); // => [-25, -1000, -2]







