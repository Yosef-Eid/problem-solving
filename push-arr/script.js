


function fun (...arr){
    let reuselt = []
    arr.forEach( (arr)=> reuselt.push(...arr))

    return reuselt
}