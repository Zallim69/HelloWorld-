 // Задание 1
    function findMin(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}

var number1 = 8;
var number2 = 4;
var result = findMin(number1, number2);
alert(result);

    // Задание 2
    function checkEvenOdd(n) {
  if (n % 2 === 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}

    // Задание 3.1
    function printSquare(number) {
  var square = number * number;
  alert("Квадрат числа " + number + " равен " + square);
}

var number = prompt("Введите число:");
printSquare(number);
   
// Задание 3.2
function squareNumber(number) {
  return number * number;
}

var inputNumber = prompt("Введите число:");
var result = squareNumber(inputNumber);

alert("Квадрат числа " + inputNumber + " равен " + result);

    // Задание 4
    function checkAge() {
  var age = prompt("Сколько Вам лет?");
  
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
    function multiplyNumbers(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return 'Одно или оба значения не являются числом';
  }
  
  return num1 * num2;
}

alert(multiplyNumbers(5, 10)); // Выведет 50
alert(multiplyNumbers('abc', 10)); // Выведет 'Одно или оба значения не являются числом'
 
    // Задание 6
    function cubeNumber() {
  var input = prompt("Введите число:");
  
  if (isNaN(input)) {
    alert("Переданный параметр не является числом");
    return;
  }
  
  var number = Number(input);
  var result = number ** 3;
  
  alert(number + " в кубе равняется " + result);
}

cubeNumber();

    // Задание 7
    // Создаем объект circle1
var circle1 = {
  radius: 5, // задаем радиус
  getArea: function() {
    return Math.PI * this.radius * this.radius; // выисляем площадь круга
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius; // вычисляем периметр окружности
  }
};

// Создаем объект circle2
var circle2 = {
  radius: 10, // задаем радиус
  getArea: function() {
    return Math.PI * this.radius * this.radius; // вычисляем площадь круга
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius; // вычисляем периметр окружности
  }
};

// Выводим результаты через alert
alert("Площадь круга circle1: " + circle1.getArea());
alert("Периметр окружности circle1: " + circle1.getPerimeter());
alert("Площадь круга circle2: " + circle2.getArea());
alert("Периметр окружности circle2: " + circle2.getPerimeter());

    // Задание 8
    function getSeason(month) {
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