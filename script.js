

// Create a function that takes two arrays and insert the second array in the middle of the first array.


function tuckIn(arr1,arr2){

    let result = []
    result.push(arr1[0])
    result.push(...arr2)
    result.push(arr1[1])

    return result
}

console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(tuckIn([15,150], [45, 75, 35]));             // [15, 45, 75, 35, 150]
console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));         // [[1, 2], [3, 4], [5, 6]]

