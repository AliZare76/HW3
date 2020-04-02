let flatArray = function (arr, res=[]){
    for(let i =0 ; i<arr.length; i++){
        if (typeof(arr[i]) === 'object'){
            flatArray(arr[i] , res)
        }
        else{
            res.push(arr[i])
        }
    }
    return res
}
let arr =[[2,3],5,[[[2,9],4],4],1,0]

console.log(flatArray(arr))


/*let flatArray = (array=[], res=[]) => {
    for (let i of array) {
        (typeof(i) === 'object')? flatArray(i,res) : res.push(i)
    }
    return res.sort()
}

console.log(flatArray([[2,3],5,[[[2,9],4],4],1,0]))*/