const input = document.getElementById("input");
const enterButton = document.getElementById("enter_button")

function CheckInput()
{
    switch (input.value)
    {
        case "клик":
            clicks += 1000;
            counter.textContent = clicks
            break;
    }

    input.value = "";
}

enterButton.addEventListener("click", CheckInput);