let clicks = 0; // считаем клики
let clickPower = 1; // сколько кликов добавляем счетчику

const counter = document.getElementById("counter"); // получаем объект из HTML
const button = document.getElementById("button"); // получаем объект из HTML

function ButtonPressed() // функция для добавления счета при клике
{
    clicks += clickPower; // прибавляем к счету кликов клики
    counter.textContent = clicks; // также обновляем текст счетчика
}

// привязываем функцию к кнопке
button.addEventListener("click", ButtonPressed);