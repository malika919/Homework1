//1 задание
const numbs = [1, 5, 4, 10, 0, 3]

for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] === 10) {
        break
    } else {
        console.log(numbs[i])
    }
}

//2 задание 
numbs.forEach((element, index) => {
    if (element === 4) {
        console.log(`Индекс 4 элемента - ${index}`)
    }
});

//3 задание
const arrayJoin = [1, 3, 5, 10, 20];
console.log(arrayJoin.join(' '))

//4 задание 
let results = [];
for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1)
    }
    results.push(row)
}
console.log(results) //доработать 

//5 задание
const arr_1 = [1, 1, 1];
let arrp = arr_1.push(2, 2, 2)
console.log(arr_1)

//6 задание 
const arr_2 = [9, 8, 7, 'a', 6, 5];
const arrs = arr_2.sort()
let arrpop = arrs.pop()
console.log(arr_2)

//7 задание 
let question = +prompt('Угадай число')
let answers = [9, 8, 7, 6, 5];
const userAnswer = () => {
   alert(answers.includes(question) ? 'Угадал' : 'Не угадал')
}
userAnswer()

//8 задание 
const rev = 'abcdef';
const splitArr = rev.split('')
const revArr = splitArr.reverse()
console.log(revArr.join(''))

//9 задание
const multiArr =  [
    [1, 2, 3],
    [4, 5, 6]];
const result = []
for (item of multiArr){
    for (let i = 0; i < item.length; i++) {
        result.push(item[i])
    }
}
console.log(result)

for (let j = 0; j < multiArr.length; j++) {
    result.push(...multiArr[j])
}
console.log(result)

console.log(multiArr.flat())

//10 задание 
const redArr = [1, 8, 9, 2, 4, 3];
for (let i = 0; i < redArr.length - 1; i++) {
    if (redArr[i] === 3){ //(redArr[i+1]) 
        break 
    }
    let res1 = redArr[i] + redArr[(i + 1)];
    console.log(res1)
}

//11 задание 
const Arr = [3, 6, 8, 9];
const squareArr = Arr.map((square) => square**2)
console.log(squareArr)

//12 задание 
const str = ['Яблока', 'Груша', 'Банан'];
function lenStr () {
    const mapStr = str.map((str) => str.length)
    console.log(mapStr)
}
lenStr()

//13 задание 
const allArr = [2, 6, 9, -9, -5, 8];
const integersFilter = () => {
    const integers = allArr.filter((integer) => integer < 0)
    console.log(integers)
}
integersFilter()

//14 задание 
const arr_3 = [];
const evenArr = [];
for (let i = 0; i < 10; i++) {
    const mathArr = Math.floor(Math.random() * 11);
    arr_3.push(mathArr);
    if (arr_3[i] % 2 === 0) {
        evenArr.push(arr_3[i])
    } 
    
}
console.log(arr_3)
console.log(evenArr)

//15 задание 
const arr_4 = [];
let sum = 0;
for (let i = 0; i < 6; i++) {
    const num = Math.floor(Math.random() * 11)
    arr_4.push(num)
}
arr_4.forEach(element => {
        sum += element;
    });
const average = (sum / arr_4.length);
console.log(average)
