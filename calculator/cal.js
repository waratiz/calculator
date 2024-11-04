
function clearDisplay() {
  document.getElementById("display").value = "";
}

function append(character) {
  document.getElementById("display").value += character;
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}