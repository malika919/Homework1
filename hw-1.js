let a = 10;
alert(a);
a = 20;
alert(a); //1

let year = 2007;
alert(year) //2

let founderName = 'Brendan Eich';
alert(founderName) //3

let number1 = 10;
let number2 = 2;
alert(number1 + number2)
alert(number1 - number2)
alert(number1 * number2)
alert(number1 / number2) //4

let result = 2 ** 5;
alert(result) //5

let a2 = 9;
let b2 = 2;
alert(a2 % b2) //6

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num); //7

let age = +prompt('Сколько вам лет?')
alert(`Ваш возраст: ${age} лет`) //8

const user = {
    name: 'Adam',
    age: 25,
    isAdmin: true,
}

alert(`Имя: ${user.name}, возраст: ${user.age}, админ: ${user.isAdmin}`) //9

let yourName = prompt('Введите ваше имя')
alert(`Привет, ${yourName}`) //10

//additional tasks
let numberThink = +prompt('Загадайте любое число')
let numberResult = numberThink * 2;
alert(numberResult)
let newNumber = numberResult + 10;
alert(newNumber)
let numberNew = newNumber / 2;
alert(numberNew)
let finishResult = numberNew - numberThink;
alert(finishResult)
alert(`Результат равен 5`)
