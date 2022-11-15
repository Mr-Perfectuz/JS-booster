
// So'zni teskarisiga almashtirish

function reverseWord(str) {
    var reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseWord("any word"));


// 2) Mediana topish


str = "345671348";
var len = str.length;
console.log(len);

if (len % 2 == 0) {
    let sum1 = +str.slice(len / 2 - 1, len / 2) + +str.slice(len / 2, len / 2 + 1);
    console.log(sum1 / 2);
} else {
    let sum2 = +str.slice(len / 2 - 1, len / 2) + +str.slice(len / 2, len / 2 + 1);
    console.log(sum2 / 2);
}

// 3) Qolib ketgan sonni topish

function FindTheMissingNumber(str) {
    var str2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var str3 = new Array();
    for (let i = 0; i <= str2.length; i++) {
        if (str.indexOf(i) == str3.indexOf(i)) {
            str3.push([i]);
        }
    }
    return str3.toString();
}
console.log(FindTheMissingNumber("13468"));


// 4) Find max and min numbers


function findMaxAndMin(son) {
    let max = Math.max(...son);
    let min = Math.min(...son);
    return `max = ${max} min = ${min}`;
}

console.log(findMaxAndMin("467812"));


// 5) Change the part letter to anything


function changeLetters(word, wordToChange, NewChange) {
    for (let i = 0; i <= word.length; i++) {
        if (word[i] == wordToChange) {
            word = word.replace(wordToChange, NewChange)
        }
    }
    return word;
}
console.log(changeLetters("#fozil#web#brain#", "#", "()"));
