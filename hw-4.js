// 1 задание
const minNumber = (a, b) => {
    console.log (a < b ? a : b)
}

minNumber(8, 98)

// 2 задание
function parityNumber(num) {
    return num % 2 === 0 ? 'Четное число' : 'Нечетное число'
}

console.log(parityNumber(3))

// 3 задание 
const numberSquare = () => {
    let user_num = +prompt('Введите число')
    console.log(user_num**2) 
}
numberSquare();

function numberSquare_2() {
    let number = +prompt('Введите число')
    return number**2;
}
console.log(numberSquare_2());

// 4 задание
const correctAge = () => {
    let age = prompt("Сколько вам лет?")
    if (age < 0 || age === null || age === ""){
        return alert('Вы ввели неправильное значение')
    } else if (age >= 0 && age <= 12) {
        return alert('Привет, друг!')
    } else {
        return alert('Добро пожаловать!')
    }

} 
correctAge();

// 5 задание 
const multNumber = (a, b) => {
    return Number(a) && Number(b) ? a*b : 'Одно или оба значения не являются числом'
}

console.log(multNumber(6, 8))

// 6 задание 
function cubeNumber () {
    let re_num = prompt("Введите число")
    return re_num === null || re_num === "" 
    ? 'Переданный параметр не является числом' 
    : Number(re_num) ? `${re_num} в кубе равняется ${re_num**3}` : re_num
     
}

console.log(cubeNumber());

// 7 задание 
function getArea () {
    return this.radius*3.14
}

function getPerimeter () {
    return this.radius*2
}

const circle2 = {
    radius: 24,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

console.log(`Площадь окружности равна ${circle2.getArea()}, а периметр равен - ${circle2.getPerimeter()}`)

const circle3 = {
    radius: 23, 
    getArea: getArea, 
    getPerimeter: getPerimeter, 
}

console.log(`Площадь окружности равна ${circle3.getArea()}, а периметр равен - ${circle3.getPerimeter()}`)

const circle1 = {
    radius: 27,
    getArea: function() {
        return this.radius * 3.14
    },
    getPerimeter: function() {
        return 2*this.radius
    }
}
console.log(`Площадь окружности равна ${circle1.getArea()}, а периметр равен - ${circle1.getPerimeter()}`)
