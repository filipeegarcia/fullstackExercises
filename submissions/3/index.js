console.log(add(4, 6)); // Outputs 10
console.log(add(4)(6)); // Outputs 10

function add(numberOne, numberTwo) {
  if (numberTwo) {
    return numberOne + numberTwo;
  }
  return function (y) {
    return numberOne + y;
  };
}
