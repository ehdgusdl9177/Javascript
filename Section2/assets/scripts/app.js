const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  const calcDescription = `${currentResult} + ${parseInt(userInput.value)}`;
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", add);
