
const names = 'V'
const age = 38
function ag(){
    return age
}

// const string = 'my name is ' +  names + ' my age is ' + age
const string = `My name is ${names} and my age is ${ag()}`
// также констукция ${} (должно быть в `` ) принимает также Тернарное вырожение - isReady ? console.log('All good') : console.log('Bad')
console.log(string)

// В строке находится много методов
const fff = 'Muzyka'
console.log(fff.length) // длина строки
console.log(fff.toUpperCase())
console.log(fff.toLowerCase())
console.log(fff.charAt(2)) // можно посмотреть какой символ находится по указанному индексу
console.log(fff.indexOf('zyk')) // покажет есть ли такие символы в строке вернет номер индекса где есть это сочетание или символ, если нет вернет -1
console.log(fff.startsWith('Muz'))
console.log(fff.endsWith('yka'))
console.log(fff.repeat(3))
console.log(fff.trim())
console.log(fff.trimLeft())
console.log(fff.trimRight())
