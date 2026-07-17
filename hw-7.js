//1
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(people.sort((a, b) => a.age - b.age))

//2
function isPositive(num) {
    if (num >= 0) {
        return true
    } else {
        return false
    }
}

const people2 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

function isMale(people2) {
    if(people2.gender === 'male'){
        return true
    } else if (people2.gender !== 'male'){
        return false
    }
}
function filter(ruleFunction, isPositive) {
    const resultArr = [];
    for (let i = 0; i < ruleFunction.length; i++) {
        if (isPositive(ruleFunction[i])){
            resultArr.push(ruleFunction[i])
        } 
    } 
    return resultArr
}

console.log(filter([3, -4, 1, 9], isPositive));
console.log(filter(people2, isMale));


//3 
const timeFunction = (myTime) => {
    const setInt = setInterval(() => {
    const nowDate = new Date()
        console.log(nowDate)
    }, 1000 * 3);
    
    const setTime = setTimeout(() => {
        if (myTime){
            clearInterval(setInt)
            console.log('Время вышло')
        }
    }, 1000 * 30);
}
timeFunction(30)

//4
function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

//5 
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  
            cb();
        }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(function () {sayHi('Глеб')})


