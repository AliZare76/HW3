let removeDuplicates = function (array){
    let res = []
    for( let i of array){
        if (!res.includes(i)){
            res.push(i)
        }
    }
    return res
}

console.log(removeDuplicates([1,23,45,23,45,65]))