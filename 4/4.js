let findByItem = function (arr, num) {
    for( let i=0; i<arr.length ; i++){
        if (arr[i]===num){
            return `index : ${i} item : ${num}`
        }
    }
    return 'not found'
}

console.log(findByItem([2,3,4], 5))