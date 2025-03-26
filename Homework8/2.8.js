// Задание 1:
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 // Создаем функцию сравнения для сортировки по возрасту
 function compareByAge(person1, person2) {
   // Получаем значения возраста для каждого персонажа
   const age1 = person1.age;
   const age2 = person2.age;
 
   // Сравниваем возрасты и возвращаем разницу
   return age1 - age2;
 }
 
 // Используем метод sort и передаем функцию сравнения compareByAge в качестве аргумента
 console.log(people.sort(compareByAge));
 
 // Задание 2:
 function isPositive(value) {
   // Проверяем, является ли значение положительным
   return value > 0;
 }
 
 function isMale(person) {
   // Проверяем, является ли пол персоны мужским
   return person.gender === 'male';
 }
 
 function filter(arr, ruleFunction) {
   // Создаем пустой результирующий массив
   const result = [];
 
   // Проходим по каждому элементу исходного массива
   for (let i = 0; i < arr.length; i++) {
     // Проверяем, соответствует ли элемент условию ruleFunction
     if (ruleFunction(arr[i])) {
       // Если да, добавляем элемент в результирующий массив
       result.push(arr[i]);
     }
   }
 
   // Возвращаем результирующий массив
   return result;
 }
 
 console.log(filter([3, -4, 1, 9], isPositive));
 
 const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
 ];
 
 console.log(filter(people, isMale));
 
 // Задание 3:
 // Функция для вывода текущей даты
 function printCurrentDate() {
   const currentDate = new Date();
   console.log(currentDate);
 }
 
 // Функция для вывода сообщения после 30 секунд
 function printFinalMessage() {
   console.log('30 секунд прошло');
 }
 
 // Устанавливаем интервал с повторением каждые 3 секунды
 const interval = setInterval(printCurrentDate, 3000);
 
 // Устанавливаем задержку на выполнение финального сообщения через 30 секунд
 setTimeout(() => {
   // Очищаем интервал
   clearInterval(interval);
   // Выводим финальное сообщение
   printFinalMessage();
 }, 30000);
 
 // Задание 4:
 function delayForSecond(callback) {
   // Используем setTimeout для задержки выполнения callback на 1 секунду
   setTimeout(callback, 1000);
 }
 
 delayForSecond(function () {
   console.log('Привет, Глеб!');
 });
 
 // Задание 5:
 // Функция delayForSecond через 1 секунду пишет в консоль
 // «Прошла одна секунда», а затем вызывает переданный колбэк
 function delayForSecond(cb) {
   setTimeout(() => {
     console.log('Прошла одна секунда');
     if (cb) {
       cb();
     }
   }, 1000);
 }
 
 // Функция sayHi выводит в консоль приветствие для указанного имени
 function sayHi(name) {
   console.log(`Привет, ${name}!`);
 }
 
 // Код выше менять нельзя
 
 // Используем функцию-обертку для передачи аргумента в функцию sayHi
 delayForSecond(() => {
   sayHi('Глеб');
 });
 
 
 
 
 
 