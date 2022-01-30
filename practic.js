let a = +prompt()
let b = +prompt()

function ter(first, second) {
  let str = a > b ? `${a} over ${b} ` : `${b} over ${a}`
  return str
}
console.log(ter(a, b))