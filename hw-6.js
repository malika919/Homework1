//1
let str = 'js'
console.log(str.toUpperCase())

//2
const arr = ['malika', 'malika', 'js', 'like'];
const strArr = 'malika'


const arrFun = () => {
    arr.forEach((element => {
        if (element.startsWith(strArr)) {
            console.log(element)
        }
    }));
}

arrFun()

//3
let num = 32.58884;
console.log(Math.floor(num)) //ближайшее меньшее
console.log(Math.ceil(num)) //ближайшее большее
console.log(Math.round(num)) //ближайшего целого

//4 
console.log(Math.min(52, 53, 49, 77, 21, 32))
console.log(Math.max(52, 53, 49, 77, 21, 32))

//5
let numGeneration = Math.floor(Math.random() * 11)
console.log(numGeneration)

//6 
let ran = 33;
let ranArr = [];
function randomNumber() {
    for (let i = 0; i < Math.floor(ran / 2); i++) {
        let ran2 = Math.floor(Math.random() * ran);
        ranArr.push(ran2)
    }
    console.log(ranArr)
}
randomNumber()

//7 
let num1 = 3;
let num2 = 8;
const numFun = () => {
    return (Math.floor(Math.random() * (num2 - num1 + 1)) + num1)
}

console.log(numFun())

//8 
let nowDate = new Date()
console.log(nowDate)

//9
let currentDate = new Date();
let lastDate = (currentDate - 70 * 24 * 60 * 60 * 1000);
console.log(new Date(lastDate))


//10 доработать
const option = {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long',
    day: 'numeric',

}

const nowDates = new Date()
const newDate = nowDates.toLocaleDateString('ru-RU', {day: 'numeric', month: 'long',  year: 'numeric'}) + (nowDates.toLocaleDateString('ru-RU', {weekday: 'long'}))
console.log(`Дата: ${newDate}`.replace('г.', '- это '))

let options = {
    hour: '2-digit', 
    minute:'2-digit', 
    second:'2-digit'
};

const timeDate = new Date()
const timesDate = timeDate.toLocaleTimeString('ru-RU', {hour: '2-digit', minute:'2-digit', second:'2-digit'})
console.log(`Время: ${timesDate}`)