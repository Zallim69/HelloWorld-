// Задание 1
let a = 10;
alert(a);

a = 20;
alert(a);

// Задание 2
var yearOfFirstiPhone = 2007;
alert(yearOfFirstiPhone);

// Задание 3
var creatorName = "Brendan Eich";
console.log(creatorName);

// Задание 4
var a = 10;
var b = 2;

var sum = a + b;
var difference = a - b;
var product = a * b;
var quotient = a / b;

alert("Сумма: " + sum);
alert("Разность: " + difference);
alert("Произведение: " + product);
alert("Частное: " + quotient);

// Задание 5
var result = 2 ** 5;
alert(result);

// Задание 6
var a = 9;
var b = 2;
var remainder = a % b;
alert(remainder);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8
let age = prompt("Сколько Вам лет?");
alert(age);

// Задание 9.0
const user = {
  name: "Zalim",
  age: 36,
  isAdmin: true,
};

console.log(user);

// Задание 9.1
user.cityOfResidence = "Baksan";

// Задание 9.2
const user = {
  name: "Zalim",
  age: 36,
  isAdmin: true,
};

user.age = 18;
console.log(user);

// Задание 9.3
delete user["city of residence"];

// Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

// Задание 10
let name = prompt("Введите Ваше имя");
alert(`Привет, ${name}!`);
