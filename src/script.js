const display = document.querySelector('.display')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const minus = document.querySelector('.minus')
const divide = document.querySelector('.divide')
const add = document.querySelector('.add')
const mul = document.querySelector('.mul')
const equals = document.querySelector('.equal')

let num1 = 0
let num2 = 0
let operator = 'none'

const storeNum = (num) => {
  one.addEventListener('click', () => {
    num += one.value
    console.log(num)
  })

  two.addEventListener('click', () => {
    num += two.value
    console.log(num)
  })

  three.addEventListener('click', () => {
    num += three.value
    console.log(num)
  })

  four.addEventListener('click', () => {
    num += four.value
    console.log(num)
  })

  five.addEventListener('click', () => {
    num += five.value
    console.log(num)
  })

  six.addEventListener('click', () => {
    num += six.value
    console.log(num)
  })

  seven.addEventListener('click', () => {
    num += seven.value
    console.log(num)
  })

  eight.addEventListener('click', () => {
    num += eight.value
    console.log(num)
  })

  nine.addEventListener('click', () => {
    num += nine.value
    console.log(num)
  })

  return Number(num)
}

const operatorChoice = () => {
  add.addEventListener('click', () => {
    operator = 'add'
    storeNum(num2)
    console.log(operator)
  })

  divide.addEventListener('click', () => {
    operator = 'divide'
    storeNum(num2)
    console.log(operator)
  })

  minus.addEventListener('click', () => {
    operator = 'minus'
    storeNum(num2)
    console.log(operator)
  })

  mul.addEventListener('click', () => {
    operator = 'mul'
    storeNum(num2)
    console.log(operator)
  })
}

let result = 0

const calculator = () => {

  operatorChoice()

  switch (operator) {
    case 'add':
      result = Number(num1) + Number(num2)
    case 'mul':
      result = Number(num1) * Number(num2)
    case 'div':
      result = Number(num1) / Number(num2)
    case 'sub':
      result = Number(num1) - Number(num2)
  }

  equals.addEventListener('click', () => {
    display.textContent = result
  })

}

calculator()