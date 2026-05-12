//1 задание

let msg = 'привет'
let count = 1;
while (count < 3) {
    console.log(msg)
    count++;
}

let user = 'привет'
for (let i = 1; i < 3; i++) {
    console.log(user)
}

//2 задание
let num = 1;
while (num <= 5) {
    console.log(num)
    num++;
}

for (let i = 1; i <= 5; i++) {
    console.log(i)
}

//3 задание 
let a = 7;
while (a <= 22) {
    console.log(a)
    a++;
}

//4
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400',
}

for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`)
}

//5 задание 
let num1 = 1000;
let num2 = 0;
while (num1 >= 50) {
    num1 /= 2;
    num2++;
}
console.log(num1)
console.log(num2)

//6 задание 
let friday = 5;
while (friday <= 31) {
    console.log(`Сегодня пятница ${friday}-е. Необходимо подготовить отчет`)
    friday += 7;
}

//доп.задания

//1 задание
let a2 = 100;
let iterations = 0;
while (a2 >= 0) {
    a2 -= 7;
    iterations++;
    console.log(a2)
    console.log(iterations)
}

//3 задание 
const book = {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    genre: "Роман"
};

for (let key in book){
    console.log(`${key} - ${book[key]}`)
}