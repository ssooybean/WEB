let isStrRaining = prompt("Дождь идет? Да или Нет")
let isRaining;
if (isStrRaining == "Да"){isRaining = true;}
else {isRaining = false;}
let minutes;
if (!isRaining)
  {
    let temperature = Number(prompt("Сколько сейчас градусов?"))
    if (35 < temperature && temperature < 0) {minutes = 0}
    else if (temperature == 20) {minutes = 20}
    else if (temperature < 20) {minutes = temperature}
    else if (temperature > 20) {minutes = 20 - (temperature - 20)}
  }
else {minutes = 0}
alert('Макс гуляет: ' + minutes + ' минут')
