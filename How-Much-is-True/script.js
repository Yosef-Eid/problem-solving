
// Create a function which returns the number of true values there are in an array.


function countTrue(arr) {
    let number = 0
    for(let loop of arr) loop?  number++ :''
    return number 
}
    console.log(countTrue([false, false, true, true, false, true, false]))      // 3
    console.log(countTrue([true, false, false, true, false] ));                 // 2
    console.log(countTrue([false, false, false, false] ));                      // 0
    console.log(countTrue([] ))                                                 // 0
