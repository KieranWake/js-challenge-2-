// Need to create a function that takes an array of numbers and returns both the minimum and - 
// maximum numbers in that order. 

// examples: 
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
//minMax([2334454, 5]) ➞ [5, 2334454]
//minMax([1]) ➞ [1, 1]

//All test arrays will have at least one element and are valid.

function minMax(arr) {
    const minVal = Math.min(...arr);
    const maxVal = Math.max(...arr);

    return [minVal, maxVal];
}

console.log(minMax([230, 34, 56, 70, 330])); 