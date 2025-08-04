document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();

  const AC = document.getElementById("AC");
  const percentage = document.getElementById("percentage");
  const backspace = document.getElementById("backspace");
  const divide = document.getElementById("divide");
  const button = document.body.getElementsByClassName('number')
  const dot = document.getElementById("dot");
  const equal = document.getElementById("equal");
  const addition = document.getElementById("addition");
  const subtract = document.getElementById("subtract");
  const multiply = document.getElementById("multiply");
  const display = document.body.getElementsByClassName("text-box")[0];

  AC.addEventListener("click", (event) => {
    event.preventDefault();
    display.textContent = "";
  });

  percentage.addEventListener("click", (event) => {
    event.preventDefault();
    appendOperator(percentage.textContent);
  });

  backspace.addEventListener("click", (event) => {
    event.preventDefault();
    display.textContent = display.textContent.slice(
      0,
      display.textContent.length - 1
    );
  });

  Array.from(button).forEach(element =>{
    element.addEventListener('click', (event) =>{
      event.preventDefault();
      display.textContent += element.textContent
    })
  })

  dot.addEventListener("click", (event) => {
    event.preventDefault();
    appendOperator(dot.textContent);
  });

  const isOperator = (char) => ["+", "-", "×", "÷", "%", "."].includes(char);

  const appendOperator = (operator) => {
    const current = display.textContent.trim();
    const lastChar = current.charAt(current.length - 1);

    if (isOperator(lastChar)) {
      display.textContent = current.slice(0, -1) + operator;
    } else if (current !== "") {
      display.textContent += operator;
    }
  };

  addition.addEventListener("click", (event) => {
    event.preventDefault();
    appendOperator("+");
  });

  subtract.addEventListener("click", (event) => {
    event.preventDefault();
    appendOperator("-");
  });

  multiply.addEventListener("click", (event) => {
    event.preventDefault();
    appendOperator("×");
  });

  divide.addEventListener("click", (event) => {
    event.preventDefault();
    appendOperator("÷");
  });

  const evaluate = (expression) => {
    if (!expression) {
      return;
    }
    // Add evaluation logic here
    const safeExpr = expression
      .replace(/(\d+)%/g, "($1/100)")
      .replace(/×/g, "*")
      .replace(/÷/g, "/");
    return eval(safeExpr);
  };

  equal.addEventListener("click", (event) => {
    event.preventDefault();
    let result = evaluate(display.textContent);
    display.textContent = result;
  });
});
