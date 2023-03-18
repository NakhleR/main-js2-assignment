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
const sub = document.querySelector('.sub')
const divide = document.querySelector('.divide')
const add = document.querySelector('.add')
const mul = document.querySelector('.mul')
const equals = document.querySelector('.equal')
const dot = document.querySelector('.dot')
const reset = document.querySelector('.ac')
const del = document.querySelector('.de')

let num1, num2, operator

const addFunc = () => {
  if (operator == null) {
    num1 = Number(display.textContent)
  } else {
    num2 = Number(display.textContent)
    operate()
  }
  operator = 'add'
  display.textContent = ""
}

const mulFunc = () => {
  if (operator == null) {
    num1 = Number(display.textContent)
  } else {
    num2 = Number(display.textContent)
    operate()
  }
  operator = 'mul'
  display.textContent = ""
}

const subFunc = () => {
  if (operator == null) {
    num1 = Number(display.textContent)
  } else {
    num2 = Number(display.textContent)
    operate()
  }
  operator = 'sub'
  display.textContent = ""
}

const divFunc = () => {
  if (operator == null) {
    num1 = Number(display.textContent)
  } else {
    num2 = Number(display.textContent)
    operate()
  }
  operator = 'divide'
  display.textContent = ""
}

const storeNum = (num) => {
  if (operator == null) {
    display.textContent += num
  } else {
    display.textContent += num
    num2 = Number(display.textContent)
  }
}

const operate = () => {
  if (operator == 'add') {
    num1 = Number(num1) + Number(num2)
    operator = null
    num2 = null
    display.textContent = num1
  }

  if (operator == 'sub') {
    num1 = Number(num1) - Number(num2)
    operator = null
    num2 = null
    display.textContent = num1
  }

  if (operator == 'mul') {
    num1 = Number(num1) * Number(num2)
    operator = null
    num2 = null
    display.textContent = num1
  }

  if (operator == 'divide') {
    if (num2 === 0) {
      display.textContent = "ERROR"
      operator = null
    } else {
      num1 = Number(num1) / Number(num2)
      operator = null
      num2 = null
      display.textContent = num1
    }
  }
}

equals.addEventListener('click', () => {
  if (num1 == undefined && num2 == undefined) {
    display.textContent = "ERROR"
  }
  if (num2 != null) {
    operate()
  }
})

reset.addEventListener('click', () => {
  if (display.textContent === "") {
    num1 = undefined
    num2 = undefined
    operator = null
  } else {
    if (confirm("Are you sure you want to clear data ?")) {
      display.textContent = ""
      num1 = undefined
      num2 = undefined
      operator = null
    }
  }
})

del.addEventListener('click', () => {
  if (operator == null) {
    display.textContent = display.textContent.slice(0, -1)
  } else {
    display.textContent = display.textContent.slice(0, -1)
    num2 = Number(display.textContent)
  }
})

document.addEventListener('keydown', event => {
  if (event.keyCode === 8) {
    event.preventDefault()
    if (operator == null) {
      display.textContent = display.textContent.slice(0, -1);
    } else {
      display.textContent = display.textContent.slice(0, -1);
      num2 = Number(display.textContent);
    }
  }

  if (event.key === 49) {
    event.preventDefault()
  }
})