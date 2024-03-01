// Задание 1
const findMin = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(findMin(8, 4));
console.log(findMin(6, 6));

/*первое задание с плавающими вводными*/
const compareNumbers = () => {
  let num1 = Number(prompt("Введите первое число"));
  let num2 = Number(prompt("Введите второе число"));
  if (num1 > num2) {
    alert("Первое число больше");
  } else if (num1 < num2) {
    alert("Второе число больше");
  } else {
    alert("Числа равны");
  }
}

compareNumbers();

// Задание 2
const checkEvenOdd = (n) => {
  if (n % 2 === 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}

// Задание 3.1
const printSquare = (number) => {
  const square = number * number;
  alert("Квадрат числа " + number + " равен " + square);
}

const number = prompt("Введите число:");
printSquare(number);

// Задание 3.2
const squareNumber = (number) => {
  return number * number;
}

const inputNumber = prompt("Введите число:");
const result = squareNumber(inputNumber);

alert("Квадрат числа " + inputNumber + " равен " + result);

// Задание 4
const checkAge = () => {
  const age = prompt("Сколько Вам лет?");
  
  if (age < 0) {
    alert("Вы ввели неправильное значение");
  } else if (age >= 0 && age <= 12) {
    alert("Привет, друг!");
  } else {
    alert("Добро пожаловать!");
  }
}

checkAge();

// Задание 5
const multiplyNumbers = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    return 'Одно или оба значения не являются числом';
  }
  
  return num1 * num2;
}

alert(multiplyNumbers(5, 10)); // Выведет 50
alert(multiplyNumbers('abc', 10)); // Выведет 'Одно или оба значения не являются числом'

// Задание 6
const cubeNumber = () => {
  const input = prompt("Введите число:");
  
  if (isNaN(input)) {
    alert("Переданный параметр не является числом");
    return;
  }
  
  const number = Number(input);
  const result = number ** 3;
  alert(number + " в кубе равняется " + result);
}

cubeNumber();

// Задание 7
const circle1 = {
  radius: 5,
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

const circle2 = {
  radius: 10,
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

alert("Площадь круга circle1: " + circle1.getArea());
alert("Периметр окружности circle1: " + circle1.getPerimeter());
alert("Площадь круга circle2: " + circle2.getArea());
alert("Периметр окружности circle2: " + circle2.getPerimeter());

// Задание 8
const getSeason = (month) => {
  if (month === 12 || month === 1 || month === 2) {
    return "Зима";
  } else if (month === 3 || month === 4 || month === 5) {
    return "Весна";
  } else if (month === 6 || month === 7 || month === 8) {
    return "Лето";
  } else if (month === 9 || month === 10 || month === 11) {
    return "Осень";
  } else {
    return "Неправильный номер месяца";
  }
}

alert(getSeason(8)); // Выведет "Лето" на экран