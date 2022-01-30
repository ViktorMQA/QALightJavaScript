// Переменные variable
var names = 'Viktor'; // var - можно менять значения такой переменной (depricated)
const firstName = 'Muz'; // const - нельзя менять значения такой переменной
let age = 26; // var - можно менять значения такой переменной

// Лучше использовать let или const
// Джава скрипт динамически типизированный язык, в переменную можна передать как стрингу так и цифру либо сделать булеан - true/false
// нельзя называть переменную цифрой

age = '38';
console.log(firstName, age); // выводит в консоль

// Мутирование
console.log('Имя человека: ' + firstName + ' а возраст: ' + age);

// prompt('введите фамилию'); // отображает попап с импут полем позволяет принимать значения от пользователя
//const lastName = prompt('введите фамилию');
//console.log(lastName)

// Операторы
const a = 10
const b = 50
let c = b - a
console.log(c)
console.log(a+b)
console.log(a*b)
console.log(c++) // добавит но выведет в консоль без изменения 
console.log(++c) // добавит и выведет уже с новым значением
c = c + a // c += a тоже самое

// Типы данных
const str = 'word'
const bool = true
const int = 38
let x
null // 5-й тип данных
console.log(typeof str) // typeof показывает тип данных для переменной
console.log(typeof bool)
console.log(typeof int)
console.log(typeof x)

// Приоритет операторов 
// ввести в гугл запрос mdn (это означает что искать будет в девелопер мазиле) - mdn operator precendence
// там ищем таблицу преоритетов операторов
const xx = 5
const y = 8
const z = 50
const isTtt = xx + y < z
console.log(isTtt) // выведет true

// Условные операторы
// if(){}; else if(){}; else{};
// === равно, чтобы JS не преводил к одному типу данных, == приводит к одному типу данных
const isReady = false;
if (isReady){ // можно не писать в условии isReady = true, там всегда предполагается true
    console.log('All good')
}else{
    console.log('Bad')
}
// Тернарное вырожение 
//isReady ? console.log('All good') : console.log('Bad')

//Логические операторы && - и, || - или, ! - не. 

// Функции
function calculyator(num1, num2){
    const result = num1 - num2
    return result
}

console.log(calculyator(30, 5))

// Массивы
const car = new Array(); // обьявление массива
const car2 = ['mazda', 'lada', 'BMW'] // обьвление и занесение данных
// const car2 = new Array('mazda', 'lada', 'BMW'); // обьвление и занесение данных (вариант 2)
//car[0] = 'mazda'
console.log(car2.length) // длина массива
car2[3] = 'new car' // добавить елемент в масив по номеру индекса
car2[car2.length] = 'last car' // добавить елемент в масив и поместить его в конец
console.log(car2)

//Циклы
 arr1 = ['maz', 'lada', 'BMW']
for(let i = 0; i<arr1.length; i ++){
   const newArr = arr1[i]
    console.log(newArr)
}

// for(let newArr of arr1){                  тоже самое
//     console.log(newArr)
// }

// Обькты
const person = {
    firstName: 'V',
    lastName: 'M',
    lang: ['en', 'ru', 'uk'],
    year: 1983,
    hasWife: true,
    calculytor2: function(a, b) {
                const res = a + b
        return res
    }
}

console.log(person)
console.log(person.calculytor2(1,3))
console.log(person.lang)
console.log(person['lang']) // тоже самое
person.year = 1984 //можем менять значение ключей
person.hasChildren = true // можно добавлять новые ключ
console.log(person)
