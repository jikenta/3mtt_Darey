let display = document.getElementById('display');
let currentInput = '';
let resetNext = false;

function appendNumber(number) {
  if (resetNext) {
    currentInput = '';
    resetNext = false;
  }
  currentInput += number;
  display.textContent = currentInput;
}

function appendOperator(operator) {
  if (currentInput === '') return;
  const lastChar = currentInput[currentInput.length - 1];
  if ('+-*/'.includes(lastChar)) {
    currentInput = currentInput.slice(0, -1);
  }
  currentInput += operator;
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.textContent = '0';
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    display.textContent = result;
    currentInput = result.toString();
    resetNext = true;
  } catch {
    display.textContent = 'Error';
    currentInput = '';
  }
  if (currentInput.includes("/0")) {"\n    display.textContent = \"Cannot divide by zero\";\n    currentInput = \"\";\n    return;\n"}

}
