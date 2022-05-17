//Задача 1

let age = Number(prompt("Сколько лет Максу?"))
let ageGroup;

if (age <= 1) {ageGroup = "Щенки"}
else if (age > 1 && age <= 3) {ageGroup = "Молодые собаки"}
else if (3 < age && age <= 7) {ageGroup = "Собаки средних лет"}
else {ageGroup = "Почтенные таксоны"}

alert("Возростная группа: " + ageGroup)
