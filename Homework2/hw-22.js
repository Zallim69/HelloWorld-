// Задание 1
let a = 10;
alert(a);

a = 20;
alert(a);

// Задание 2
let yearOfFirstiPhone = 2007;
alert(yearOfFirstiPhone);

// Задание 3
let creatorName = "Brendan Eich";
console.log(creatorName);

// Задание 4
let a = 10;
let b = 2;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

alert("Сумма: " + sum);
alert("Разность: " + difference);
alert("Произведение: " + product);
alert("Частное: " + quotient);

// Задание 5
let result = 2 ** 5;
alert(result);

// Задание 6
let a = 9;
let b = 2;
let remainder = a % b;
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
let user = {
  name: "Zalim",
  age: 36,
  isAdmin: true,
};

console.log(user);

// Задание 9.1
user["city of residence"] = "Baksan";

// Задание 9.2
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
