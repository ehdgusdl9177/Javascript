const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function add() {
  const enteredNumber = parseInt(userInput.value);
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + parseInt(enteredNumber);
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", add);
