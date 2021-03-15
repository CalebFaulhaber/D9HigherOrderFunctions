const even =  n  =>  n % 2 === 0;
const odd = n => !even( n );
const above = min => n => n > min;
const repeatedValue = (value, index, arr) => index !== arr.indexOf(value);

let arr = [1, 2, 3, 2, 3, 4, 5, 6];

// const filter = (arr, fn) => a = (...arr) => a.forEach(fn(a)) => {return a};
// ------above line is wrong------

// const filter = (arr, fn) => {
//     let returnArr = [];
//     for (let i in arr) {
//         if (fn(arr[i], i, arr)) {
//             returnArr.push(arr[i])
//         }
//     }
//     return returnArr;
// }
const filter = (arr, fn) => {
    let returnArr = [];
    arr.forEach((item, i) => {
        if (fn(item, i, arr)) {
            returnArr.push(item)
        }
    })
    return returnArr;
}

console.log(filter([1, 2, 3, 2, 3, 4, 5], repeatedValue));



// [Lab] Implement Filter

// Write an higher-order function, filter, from scratch that takes two arguments:

//     the first is an array
//     the second is a callback that will be called once for every element in the array with 3 arguments:
//         the current value of the element
//         the current index of the element
//         the array itself

// filter returns a new array that only contains elements of provided array where the

// callback function returns true.

// Usage examples:
// // given three functions:
// // even returns true if its argument, n, is an even number (false otherwise)
// const even = function ( n ) { return n % 2 === 0 };
// // even returns true if its argument, n, is an odd number (false otherwise)
// const odd = function ( n ) { return !even( n ) };

// // creates a function that returns true if its argument is above min
// const above = function (min) {
//   return function ( n ) {
//     return n > min;
//   }
// }

// // repeatedValue returns true if its argument, value, is a value that is repeated within the array, arr, (falcodee
// otherwise)

// const repeatedValue = function(value, index, arr) {
//   return index !== arr.indexOf(value);
// };


// let arr = [1,2,3,4,5,6];

// filter(arr, even) // returns 2,4,6
// filter(arr, odd) // returns 1,3,5
// filter(arr, above(3)) // returns 4,5,6
// filter([1, 2, 3, 2, 3, 4, 5], repeatedValue); // returns 2,3