//How to check whether a string is palindrome or not ?


const string = `JajaJ`


// Method 1:
function checkPalindromeMethod1(string) {
    const arrofString = string.split('')
    let isPalindrome = true;
    for (let i = 0; i < arrofString.length / 2; i++) {
        const firstElement = arrofString[i];
        const lastElement = arrofString[arrofString.length - 1 -i]
        if (firstElement !== lastElement) {
            isPalindrome = false
            break
        }
    }

    if (isPalindrome) {
        console.log('String is Palindrome')
    } else {
        console.log('String is not Palindrome')
    }
}

// Method 2:
function checkPalindromeMethod2(string) {
    if (string.length <= 1) return true;

    if (string[0] != string[string.length - 1]) return false;

    const newWord = string.slice(1, string.length - 1)
    return checkPalindromeMethod2(newWord)
}

console.log(checkPalindromeMethod1(string))
console.log(checkPalindromeMethod2(string))
