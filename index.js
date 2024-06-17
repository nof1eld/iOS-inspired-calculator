const displayScreen = document.getElementById("display");
const keys = document.getElementById("keys");
const writeOnScreen = (input) => {
  displayScreen.append(input);
  console.log(`${input}`);
};
const calculate = (input) => {
  if (input.includes("÷") || input.includes("×")) {
    input = input.replace(/÷/g, "/");
    input = input.replace(/×/g, "*");
  }
  return eval(input);
};
keys.addEventListener("click", (e) => {
  if (e.target.innerHTML === "C") {
    displayScreen.innerHTML = "";
  } else if (e.target.innerHTML === "⌫") {
    displayScreen.innerHTML = displayScreen.innerHTML.slice(0, -1);
  } else if (e.target.innerHTML === "=") {
    displayScreen.innerHTML = calculate(displayScreen.innerHTML);
  } else {
    writeOnScreen(e.target.innerHTML);
  }
});
