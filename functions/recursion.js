// Recursion is doing something over and over again

// A Recursive function is a function that invokes itself

// function sum(arr) {
//     // Termination condition (Does not call itself)
//     if (arr.length === 0) {
//       return 0;
//     } else {
//       // arr.slice(1) will return the array minus the element at index 0;
//       // So if given [1,2,3,4].slice(1) -> [2,3,4];
//       return arr[0] + sum(arr.slice(1));
//     }
//   }
  
  const testArr = [1,2,3,4];
//   console.log(sum(testArr));
  
  const factorial = (n) => {
    // termination case
    if (n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  const fact = n => n === 1 ? 1 : n * factorial(n-1);
console.time()
  console.log(factorial(5))
console.timeEnd()
console.time()
  console.log(fact(5))
console.timeEnd()

  // -> return 5 * factorial(5 - 1);
//   -> return 4 * factorial(4 - 1);
//     -> return 3 * factorial(3 - 1);
//       -> return 2 * factorial(2 - 1);
//         -> return 1;
//         -> 1
//       -> 2
//     -> 6
//   -> 24
// -> 120


// const ifactorial = (n) => {
//     let product = 1;
//     for (let i = n; i >= 1; i--) {
//       product = product * i;
//     }
//     return product;
//   }
  
//   console.time('iteration');
//   ifactorial(10000);
//   console.timeEnd('iteration');
  
//   console.time('recursive');
//   factorial(10000);
//   console.timeEnd('recursive');
  
  
//   const arr = [[[1,2], [3,4], [5,6]]];