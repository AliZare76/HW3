let combinator = function (arr, ...theArgs){
        for (let i =0; i<theArgs.length ; i++){
            arr.push(theArgs[i])
        }
        return flatArray(arr)
}

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

let arr = [1,3,4,5]
let sum = ['df','fg']
let num = [34,567,'rt']

console.log(combinator(arr, sum, num))