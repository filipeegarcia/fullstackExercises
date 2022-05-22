// The explanation of the wrong output of the code is related to the use of the setTimeout() function.
// setTimeout() is an asynchronous function, so that means that the entire for will be executed before the setTimeout().
// In general, we should await for an asynchronous function, but that's not possible because setTimeout does not return a Promise.
// I had to research about the best way to solve this, so I found that I had could use a "Self-Executing Anonymous Function".
//The correct implementation can be found below:

for (let i = 0; i < 5; i++) {
  (function () {
    const index = i;
    setTimeout(function () {
      console.log(index);
    }, index * 1000);
  })();
}
