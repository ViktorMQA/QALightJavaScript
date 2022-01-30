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

person.color = 'black'
delete person.color // удаляет ключ вместе со значением

// const firstName = person.firstName // заносим значения ключей обьекта в новые переменные
// const lastName = person.lastName
// const lang = person.lang

const {firstName, lastName, lang} = person // тоже самое


console.log(firstName, lastName, lang)

const key = Object.keys(person) // получить ключи обькта

key.forEach(function(k){                // получить ключи и значения для них
    console.log('keys: ', k)
    console.log('value: ', person[k])
})
console.log(key)

// Контекст
