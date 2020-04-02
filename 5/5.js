let findByItem = function (arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i
        }
    }
    return false
}
let replaceItem = function (arr, currentItem, newItem ){
    arr[findByItem(arr,currentItem)] = newItem

    return arr
}
console.log(replaceItem([1,2,4,5],4,3))