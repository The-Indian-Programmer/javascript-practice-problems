// Program to find longest word in a given sentence ?


let sentence = `Select the Job Role you would like to practise`

function largestWord(sentence) {
    let arr = sentence.split(" ")

    let word = arr[0]

    for (let i = 0; i < arr.length; i++) {
       if (word.length < arr[i].length) {
        word = arr[i]
       }
    }
    return word
}
