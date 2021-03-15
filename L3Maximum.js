let arr = [1,2,3,4,6,4,3,2,1];
// check out Davids recursive function bellow. It works while initializing
// a variable within the recursive function

const maximum = arr => {
    let bigNum1 = arr[0];
    let bigNum2 = arr[0];
    const iterationMax = arr => {
        for (let num of arr) {
            if (num > bigNum1) {
                bigNum1 = num;
            }
        };
        return bigNum1;
    };

    const recursionMax = arr => {
        if (arr.length === 0) {
            return bigNum2;
        } else {
            if (arr[0] > bigNum2) {
                bigNum = arr[0];
            }
            recursionMax(arr.slice(1));
        }
        return bigNum2;
    }

    recursionMax(arr);
    iterationMax(arr);
    return `Recursion Function: ${bigNum2}\nIteration Function: ${bigNum1}\n`
};

console.log(maximum(arr));


// ------------------Davids----------------
// function maxIter(arr) {
//     if (arr.length === 0) {
//       return
//     }
//     let maxValue = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > maxValue) {
//         maxValue = arr[i]
//       }
//     }
//     return maxValue
//   }
  
//   function maxRecursive(arr, accumulator) {
//     let tempMax = accumulator ? accumulator : 0
//     if (arr.length === 0) {
//       return tempMax
//     }
//     if (arr[arr.length - 1] > tempMax) {
//       tempMax = arr[arr.length - 1]
//     }
//     arr.pop()
//     return maxRecursive(arr, tempMax)
//   }
// ------------------Davids----------------




// [Lab] Maximum

// Write a method that returns the maximum number in an array in two ways without using Math.max or Array#sort:

//     Using iteration.
//     Using recursion.

// Benchmark your two solutions with console.time and
// console.timeEnd. Make sure to benchmark with really large arrays.

// Examples:
// maximum([ 213, 12, 66, 999 ]); # should return 999
// maximum([ 1, 2, 3, 11, 3, 6, 5 ]); # should return 11