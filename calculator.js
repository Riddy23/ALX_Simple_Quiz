function add(a, b) {
  return a + b;
}

function performOperation(a, b, op) {
  if (isNaN(a) || isNaN(b)) return "Invalid input";

  switch (op) {
    case 'add':
      return add(a, b);
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return b !== 0 ? a / b : "Cannot divide by zero";
    default:
      return "Unknown operation";
  }
}

function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const op = document.getElementById('operation').value;
  const resultBox = document.getElementById('result');

  const result = performOperation(num1, num2, op);
  resultBox.textContent = `Result: ${result}`;

  return result; 
}


document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('calculateBtn');
  if (btn) {
    btn.addEventListener('click', calculate);
  }
});
    
