// Задание 1:
let password = 'пароль';
let userPassword = prompt('Введите пароль');

if (userPassword === password) {
  console.log('Пароль введен верно');
} else {
  console.log('Пароль введен неправильно');
}


// Задание 2:
let c = 0;

if (c > 0 && c < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}


// Задание 3:
let d = 50;
let e = 120;

if (d > 100 || e > 100) {
  console.log('Верно');
} else {
  console.log('Неверно');
}


// Задание 4:
let a = '2';
let b = '3';

alert(Number(a) + Number(b));


// Задание 5:
let monthNumber = 12;

switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    console.log('Зима');
    break;
  case 3:
  case 4:
  case 5:
    console.log('Весна');
    break;
  case 6:
  case 7:
  case 8:
    console.log('Лето');
    break;
  case 9:
  case 10:
  case 11:
    console.log('Осень');
    break;
  default:
    console.log('Некорректный номер месяца');
    break;
}


// Задание 7:
let number = prompt('Пожалуйста, введите число');

if (isNaN(number)) {
  console.log('Вы ввели не число');
} else {
  if (number % 2 === 0) {
    console.log('Число четное');
  } else {
    console.log('Число нечетное');
  }
}


// Задание 8:
let clientOS = 0;

if (clientOS === 0) {
  console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
  console.log('Установите версию приложения для Android по ссылке');
} else {
  console.log('Неизвестная операционная система');
}


// Задание 9:
let clientOS = 0;
let clientDeviceYear = 2010;

if (clientDeviceYear >= 2015) {
  if (clientOS === 0) {
    console.log('Установите приложение для iOS по ссылке');
  } else if (clientOS === 1) {
    console.log('Установите приложение для Android по ссылке');
  } else {
    console.log('Неизвестная операционная система');
  }
} else {
  if (clientOS === 0) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
  } else if (clientOS === 1) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
  } else {
    console.log('Неизвестная операционная система');
  }
}
