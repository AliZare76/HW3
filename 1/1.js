let deleteByIndex = function (arr, index) {
    if (index >= arr.length) {
        return false
    } else {
        arr.splice(index, 1)
    }

    return arr
}

let item = [1, 2, 3, 4, 5]

console.log(deleteByIndex(item, 3))