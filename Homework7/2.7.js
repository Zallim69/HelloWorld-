// Задание 1:
/ Исходная строка
let str = "js";

// Преобразуем строку в верхний регистр с помощью метода toUpperCase()
let upperCaseStr = str.toUpperCase();

// Выводим результат в консоль
console.log(upperCaseStr); // Выведет "JS"

// Задание 2:
// Создаем функцию searchStart, которая принимает массив строк и строку
function searchStart(arr, str) {
    // Преобразуем переданную строку и все строки в массиве к нижнему регистру для сравнения без учета регистра
    let lowerCaseStr = str.toLowerCase();
    let lowerCaseArr = arr.map(item => item.toLowerCase());
    
    // Фильтруем массив и оставляем только те элементы, которые начинаются с переданной строки
    let filteredArr = lowerCaseArr.filter(item => item.startsWith(lowerCaseStr));
    
    // Возвращаем отфильтрованный массив
    return filteredArr;
}

// Задание 3:
// Округляем число 32.58884 до меньшего целого
let roundedDown = Math.floor(32.58884);
console.log("До меньшего целого:", roundedDown);

// Округляем число 32.58884 до большего целого
let roundedUp = Math.ceil(32.58884);
console.log("До большего целого:", roundedUp);

// Округляем число 32.58884 до ближайшего целого
let roundedNearest = Math.round(32.58884);
console.log("До ближайшего целого:", roundedNearest);

// Задание 4:
// Создаем массив чисел
let numbers = [52, 53, 49, 77, 21, 32];

// Находим наименьшее число в массиве
let minNumber = Math.min(...numbers);

// Находим наибольшее число в массиве
let maxNumber = Math.max(...numbers);

// Выводим результаты в консоль
console.log(`Наименьшее число: ${minNumber}`);
console.log(`Наибольшее число: ${maxNumber}`);

// Задание 5:
function generateRandomNumber() {
    // Генерируем случайное число от 1 до 10
    let randomNumber = Math.floor(Math.random() * 10) + 1;

    // Выводим сгенерированное число в консоль
    console.log("Случайное число от 1 до 10: " + randomNumber);
}

// Вызов функции для генерации и вывода случайного числа
generateRandomNumber();

// Задание 6:
// Функция, которая принимает целое число и возвращает массив случайных целых чисел от 0 до переданного числа
function generateRandomArray(num) {
    let arrayLength = num / 2; // Вычисляем длину массива (в 2 раза меньше переданного числа)
    let randomArray = []; // Создаем пустой массив для хранения случайных чисел

    for (let i = 0; i < arrayLength; i++) {
        let randomNum = Math.floor(Math.random() * num); // Генерируем случайное целое число от 0 до переданного числа
        randomArray.push(randomNum); // Добавляем сгенерированное число в массив
    }

    return randomArray; // Возвращаем массив случайных чисел
}

// Задание 7:
// Выводим разделительную строку
console.log('===========№7===========');

// Функция для получения случайного числа в заданном диапазоне
let getRandomNumber = (a, b) =>
    Math.round(
        Math.min(a, b) +
        Math.random() *
        (Math.max(a, b) -
            Math.min(a, b))
    );

// Выводим случайное число в диапазоне от 32 до 103
console.log(getRandomNumber(32, 103));

// Задание 8:
// Создаем объект даты для текущего мента
let currentDate = Date();

// Получаем отдельно день, месяц и год
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0
let year = currentDate.getFullYear();

// Получаем отдельно часы, минуты и секунды
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

// Формируем строку с текущей датой и временем
let formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

// Выводим текущую дату и время в консоль
console.log("Текущая дата и время:", formattedDate);

// Задание 9:
let currentDate = new Date();

let futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log("Текущая дата: " + currentDate.toDateString());
console.log("Дата, которая наступит через 73 дня: " + futureDate.toDateString());

// Задание 10:
// Функция, которая принимает объект даты и возвращает строку с отформатированным выводом
function formatDate(date) {
    // Массивы для названий месяцев и дней недели на русском
    let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    let days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

    // Получаем значения дня, месяца, года, дня недели, часов, минут и секунд из объекта даты
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let dayOfWeek = days[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Формируем строку с отформатированным выводом
    let formattedDate = Дата: ${day} ${month} ${year} - это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds};

    return formattedDate;
}

// Создаем объект даты
let currentDate = new Date();

// Вызываем функцию formatDate и передаем в нее объект даты, затем выводим результат
console.log(formatDate(currentDate));

