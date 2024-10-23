// Program to find longest word in a given sentence ?


const word = `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`


// Method 1: 
function findLongestMethod1(word) {
    const arrOfWord = word.split(' ')
    if (arrOfWord.length == 0) return 'Word is empty !!'

    let longestWord = arrOfWord[0]

    for (let i = 0; i < arrOfWord.length; i++) {
        const element = arrOfWord[i];
        if (element.length > longestWord.length) {
            longestWord = element
        }
    }

    return longestWord
}


// Method 2: // Recursive
function findLongestMethod2(word) {
    const arrOfWord = word.split(' ');

    if (arrOfWord.length == 0) return 'Word is empty !!'
    if (arrOfWord.length == 1) return arrOfWord[0]

    let longestWord = arrOfWord[0]
    const restLongest = findLongestMethod2(arrOfWord.slice(1).join(' '))

    return restLongest.length >= longestWord.length ? restLongest : longestWord
}

// Methon 3: 
function findLongestMethod3(word) {
    const words = word.split(' ');

    return words.reduce((longest, currentword) => {
        return currentword.length > longest.length ? currentword : longest;
    }, '')

}




console.log(findLongestMethod1(word))
console.log(findLongestMethod2(word))
console.log(findLongestMethod3(word))