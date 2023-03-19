const display = document.querySelector('.display')
const zero = document.querySelector('.zero')
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
    display.textContent = num1
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
    display.textContent = num1
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
    display.textContent = num1
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
    display.textContent = num1
  }
  operator = 'divide'
  display.textContent = ""
}

const addDecimal = () => {
  if (!display.textContent.includes('.')) {
    display.textContent += '.';
  }
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
    display.textContent = Number(num1.toFixed(2))
  }

  if (operator == 'sub') {
    num1 = Number(num1) - Number(num2)
    operator = null
    num2 = null
    display.textContent = Number(num1.toFixed(2))
  }

  if (operator == 'mul') {
    num1 = Number(num1) * Number(num2)
    operator = null
    num2 = null
    display.textContent = Number(num1.toFixed(2))
  }

  if (operator == 'divide') {
    if (num2 === 0) {
      display.textContent = "ERROR"
      operator = null
    } else {
      num1 = Number(num1) / Number(num2)
      operator = null
      num2 = null
      display.textContent = Number(num1.toFixed(2))
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
  const key = event.key;
  switch (key) {
    case '0':
      zero.click();
      break;
    case '1':
      one.click();
      break;
    case '2':
      two.click();
      break;
    case '3':
      three.click();
      break;
    case '4':
      four.click();
      break;
    case '5':
      five.click();
      break;
    case '6':
      six.click();
      break;
    case '7':
      seven.click();
      break;
    case '8':
      eight.click();
      break;
    case '9':
      nine.click();
      break;
    case '+':
      add.click();
      break;
    case '-':
      sub.click();
      break;
    case '*':
      mul.click();
      break;
    case '/':
      divide.click();
      break;
    case '.':
      dot.click();
      break;
    case 'Enter':
      equals.click();
      break;
    case 'Backspace':
      if (operator == null) {
        display.textContent = display.textContent.slice(0, -1);
      } else {
        display.textContent = display.textContent.slice(0, -1);
        num2 = Number(display.textContent);
      }
      break;
    case 'Escape':
      reset.click();
      break;
    default:
      break;
  }
});