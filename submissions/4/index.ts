console.log(getFibonaaci(0));
console.log(getFibonaaci(5));
console.log(getFibonaaci(6));

function getFibonaaci(number: number) {
  let current = 1;
  let previous = 0;

  if (number <= 1) return 1;

  while (number > 1) {
    current += previous;
    previous = current - previous;
    number -= 1;
  }
  return current;
}
