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