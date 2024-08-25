// FIND THE SUM OF ELEMENTS IN AN ARRAY


let arr = [3,5,6,2,56,78,9]

function findSum(arr) {
    let sum = 0
    for(let i= 0; i< arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum

}



