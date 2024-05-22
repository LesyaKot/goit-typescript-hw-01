function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): undefined {
  throw new Error("Error Oops!");
}

export { showMessage, calc, customError };

console.log(showMessage('Hello'));
console.log(calc(25, 125));
