//закрпеление пройденного материала
//1
let total = 0
const Arr = [3, 6, 7, -8, 6];
const sumPositive = () => {
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] > 0) {
            total += Arr[i]
        }
    }
    console.log(total)
}
sumPositive()

//2
const strArr = ['яблоко', 'мир', 'привет', 'кот'];
const strArr2 = [];
const getLongWords = () => {
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length >= 4) {
            strArr2.push(strArr[i])
        }
    }
    console.log(strArr2)
}
getLongWords()

//3 
let users = [
    { name: 'Анна', age: 20 },
    { name: 'Иван', age: 17 },
    { name: 'Мария', age: 25 }
];

const ageUser = []

const getAdultNames = () => {
    for (let i = 0; i < users.length; i++) {
        users[i].age >= 18 ? ageUser.push(users[i].age) : users
    }
    console.log(ageUser)
}

getAdultNames()

//4
const numbers = [2, 5, 7, 8, 9]
const even = [];
const odd = [];
const numObj = {
    even: even,
    odd: odd,
};

const splitEvenOdd = () => {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] % 2 === 0 ? even.push(numbers[i]) :
            numbers[i] % 2 !== 0 ? odd.push(numbers[i]) : numbers
    }
    console.log(numObj)
}
splitEvenOdd()

//5 
const remArr = [0, 'hello', false, 42, '', null];
const newArr = [];

const removeFalsy = () => {
    for (let i = 0; i < remArr.length; i++) {
       if (remArr[i] !== false && remArr[i] !== 0 && remArr[i] !== null && remArr[i] !== undefined && remArr[i] !== '') {
        newArr.push(remArr[i])
       } 
    }
    console.log(newArr)
}
removeFalsy()

let date = new Date();
console.log(date)

function callbackWithArrayLength(arr, callback) {
    const lenArr = callback(arr.length)
    console.log(lenArr)
}

callbackWithArrayLength([1], (length) => {
	console.log(length);
});

callbackWithArrayLength([1, 1], (len) => {
	console.log(len);
});
callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
	console.log(l);
});

function log(arrItem) {
	console.log("Элемент массива:", arrItem);
}

function each(arr, cb) {
	for (let i = 0; i < arr.length; i++) {
		cb(arr[i]);
	}
}
each(["Глеб", "Олег", "Татьяна", "Платон"], log);

const timer = (deadline) => {
   if (isNaN(+deadline)) { // + − приводим значение к number, если это NaN,
      console.log('Передано некорректное число'); // выводим сообщение
      return; // Выходим из функции
   }

   let time = deadline;
   const interval = setInterval(() => {
      time -= 1;
      console.log(time);
   }, 1000);




setTimeout(() => {
      clearInterval(interval);
      console.log('Время истекло!')
   }, deadline * 1000)
};

const deadline = prompt('На сколько секунд вы хотите поставить таймер?');
timer(deadline);