let findNumbers = function (string) {
    let res = string.split("")
    console.log(res)
    let num =[]
    for (let i=0; i<res.length; i++){
        if(!isNaN(res[i]) && res[i] !== ' '){
            num.push(res[i])
        }
    }
    return num
}
console.log(findNumbers('sadlmd45 45 4ldf'))