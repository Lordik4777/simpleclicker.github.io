const input = document.getElementById("input");
const enterButton = document.getElementById("enter_button")

function CheckInput() // функция для проверки ввода
{
    switch (input.value)
    {
        case "клик": // чит добавляющий к счетчику 1000
            clicks += 1000; // прибавляем тысячу
            counter.textContent = clicks // обновляем значение счетчика
            break; // обязательно (это конец этого блока кода)
    }

    input.value = ""; // обнуляем ввод
}

enterButton.addEventListener("click", CheckInput);