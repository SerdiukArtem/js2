
// Покупатель вводит сумму денег которые у него есть в кошелке,и цену одной шоколадки

function calculationOfValues() {
  const sum = prompt('ВВедите сумму денег в кошельке')
  const price = prompt('Введите цену за один товар')
  let quantityOfGoods = Math.floor(Number(sum) / Number(price))
  let change = Number(sum) - (quantityOfGoods * Number(price))
  alert(`Количество товара ${quantityOfGoods}шт`)
  alert(`сдача ${change}грн`)
}

// Записываем цифры задом на оборот

var num = prompt('напишите любые три цифры ');
const change = ('' + num).split('').reverse().join('');
alert(`${change}`)

calculationOfValues()
