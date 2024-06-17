const displayScreen = document.getElementById("display");
const keys = document.getElementById("keys");

let buttons = {
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."],
  operators: ["÷", "×", "-", "+"],
};

const writeOnScreen = (input) => {
  if (buttons.numbers.includes(input) || buttons.operators.includes(input)) {
    displayScreen.value += input;
    console.log(`${input}`);
  }
};
const calculate = (input) => {
  try {
    if (input.includes("÷") || input.includes("×")) {
      input = input.replace(/÷/g, "/");
      input = input.replace(/×/g, "*");
    }
    return eval(input);
  } catch (error) {
    return "Error";
  }
};
keys.addEventListener("click", (e) => {
  if (
    displayScreen.value !== "Error" &&
    displayScreen.value !== "Infinity" &&
    displayScreen.value !== "undefined"
  ) {
    switch (e.target.innerText) {
      case "C":
        displayScreen.value = "";
        break;
      case "⌫":
        displayScreen.value = displayScreen.value.slice(0, -1);
        break;
      case "=":
        displayScreen.value = calculate(displayScreen.value);
        break;
      case "-/+":
        displayScreen.value *= -1;
        break;
      default:
        writeOnScreen(e.target.innerText);
        break;
    }
  } else {
    if (e.target.innerText === "C") {
      displayScreen.value = "";
    }
  }
});
