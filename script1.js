let clicks = 0;
let clickPower = 1;

const counter = document.getElementById("counter");
const button = document.getElementById("button");

function ButtonPressed()
{
    clicks += clickPower;
    counter.textContent = clicks;
}

button.addEventListener("click", ButtonPressed);