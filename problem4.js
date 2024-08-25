// Program to find Reverse of a string without using built-in method ?


let string = `Anystring`


function reverseString(str) {
    let arr = str.split("")
    let newArr = []
    for (let i = arr.length; i >= 1; i--){
        newArr.push(arr[i-1])
        
    }
    return newArr
}


console.log(reverseString(string))


