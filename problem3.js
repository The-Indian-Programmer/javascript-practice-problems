// Write a program to remove duplicates from an array ?


let arr = [1,2,3,4,6,2,3,7,6,4,7,9,8]

function removeDuplicates(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (!newArr.includes(element)) {
            newArr.push(element)
        }
    }
    return newArr
}

console.log(removeDuplicates(arr))