// 1 задание

let password = 'пароль';
let userPassword = prompt('Введите пароль: ');
if (userPassword === password){
    alert('пароль введен верно')
} else {
    alert('пароль введен неверно')
}

// 2 задание 
let c = 222;
console.log(c > 0 && c < 10 ? 'верно' : 'неверно')

// 3 задание 
let d = 5;
let e = 4;
if (d > 100 || e > 100){
    console.log('Верно')
} else {
    console.log('Неверно')
}

// 4 задание 
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// 5 задание 
let monthNumber = 14

switch (monthNumber){
    case 12:
    case 1:
    case 2:
        console.log('Зима')
        break
    case 3:
    case 4:
    case 5:
        console.log('Весна')
        break
    case 6:
    case 7:
    case 8:
        console.log('Лето')
        break
    case 9:
    case 10:
    case 11:
        console.log('Осень')
        break
    default:
        console.log('Месяца с таким номером не бывает')
        break
}

// доп.задания

//1 задание 

let number = +prompt('Введите число: ');
if (number % 2 === 0){
    alert('Число четное')
} else if (number % 2 != 0) {
    alert('Число нечетное')
} // насчет проверки не совсем понял как правильно реализовать, пробовал разными способами

//2 и 3 задание 
let clientOS = 0;
let clientDeviceYear = 2016;
if (clientOS === 0 && clientDeviceYear < 2015){
    alert('Установите облегченную версию приложения для iOS по ссылке')
} else if (clientOS === 1 && clientDeviceYear < 2015){
    alert('Установите облегченную версию приложения для Android по ссылке')
} else if (clientOS === 0 && clientDeviceYear >= 2015){
    alert('Установите версию приложения для iOS по ссылке')
} else if (clientOS === 1 && clientDeviceYear >= 2015){
    alert('Установите версию приложения для Android по ссылке')
}

