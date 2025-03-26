// Задание 1:
let count = 0;
while (count < 2) {
  console.log("Привет");
  count++;
}

// Задание 2:
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// Задание 3:
let i = 7;

while (i <= 22) {
  console.log(i);
  i++;
}

// Задание 4:
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};

for (let key in obj) {
    console.log(${key} — зарплата ${obj[key]} долларов);
}

// Задание 5:
let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}

.log("Результат деления: " + n);
console.log("Количество итераций: " + num);

// Задание 6:
const firstFriday = 5; 

for (let day = firstFriday; day <= 31; day += 7) {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}