function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const op = document.getElementById('operation').value;
  const resultBox = document.getElementById('result');

  const result = performOperation(num1, num2, op);
  resultBox.textContent = `Result: ${result}`;
  
  return result; 

function performOperation(a, b, op) {
  if (isNaN(a) || isNaN(b)) return "Invalid input";

  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : "Cannot divide by zero";
    default:
      return "Unknown operation";
  }
}
