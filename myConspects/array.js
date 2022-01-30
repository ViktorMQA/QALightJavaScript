// Массивы
const car = new Array(); // обьявление массива
const car2 = ['mazda', 'lada', 'BMW'] // обьвление и занесение данных
// const car2 = new Array('mazda', 'lada', 'BMW'); // обьвление и занесение данных (вариант 2)
//car[0] = 'mazda'
console.log(car2.length) // длина массива
car2[3] = 'new car' // добавить елемент в масив по номеру индекса
car2[car2.length] = 'last car' // добавить елемент в масив и поместить его в конец
console.log(car2)

car2.push('reno') // добавляет в конец новый еллемент
car2.unshift('volga') // добавляет в начало новый еллемент
console.log(car2)

const element = car2.shift() // удаляет первый еллемент из масива и возвращает его. Мы можем его удалить и занести в переменную const element = car2.shift()
console.log(element)
console.log(car2)
const element2 = car2.pop() // удаляет последний еллемент из масива и возвращает его. Мы можем его удалить и занести в переменную const element2 = car2.pop()
console.log(element2)
console.log(car2)

car2.reverse()// делает реверс (задом на перед)
console.log(car2)

console.log(car2.indexOf('BMW')) // показывает номер индекса 
car2.includes('BMV') // проверяет есть ли такой еллемент в массиве - тру или фоолс


const people = [                            // метод findIndex() используется для поиска обьектов, например
    {name: 'Elena', zarplata: 100},
    {name: 'Vika', zarplata: 200},
    {name: 'Lena', zarplata: 300}
]
const index = people.findIndex(function(person){
return person.zarplata === 100
})
console.log(index)
console.log(people[index])

const sentence = 'Привет, меня зовут блабла'
const arrSentence = sentence.split(' ') // разбивает строку на части, можно перезаписать это в массив
console.log(arrSentence)

const newCarUpperCase = car2.map(function(car){          // map() всегда возвращает новый массив. Старый останеться без изменений
    return car.toUpperCase()                             // делает все заглавные
})

// const newCarUpperCase = car2.map(car => car.toUpperCase()) // тоже самое

console.log(newCarUpperCase)


const filtr = car2.filter(num => {return num.length < 4 || num === 'last car'}) // фильтер позволяет производить фильтрацию масива, также как и меп возвращает новый масив.
console.log(filtr)


