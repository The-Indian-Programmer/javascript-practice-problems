// FIND THE SUM OF ELEMENTS IN AN ARRAY ?

const arr = [1, 4, 6, 7, 8]


// Method: 1
function findSumMethod1(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum += element
    }
    return sum
}

// Method: 2 // Recursive
function findSumMethod2(arr) {
    if (arr.length === 0) {
        return 0
    } else {
        return arr[0] + findSumMethod2(arr.slice(1))
    }
}


// Method 3: 

function findSumMethod3(arr) { // 🤣🤣🤣🤣🤣🤣🤣🤣🤣
    return arr.reduce((a, b) => a + b)
}



console.log(findSumMethod1(arr))
console.log(findSumMethod2(arr))
console.log(findSumMethod3(arr))