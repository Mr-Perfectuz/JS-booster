// 1) Juft va toq sonni topish

function findNum(num) {
    return (num == 0) ? "Juft ham emas toq ham emas"
        : (num % 2 == 0) ? "Juft son"
            : "toq son";
}
console.log(findNum(0));

// 2) usul

function findNum(num) {
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i, "Juft son");
        } else {
            console.log(i, "Toq son");
        }
    }
}

console.log(findNum(4));

// 2) find uppercase

function findUpperCase(str) {
    var newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            newStr += str[i];
        }
    }
    console.log(newStr);
}

findUpperCase("AnyInPut");


// A a, harflarinin sonini topish

var str = "WebBrainAcadAmiya";
var count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'A' || str[i] == 'a') {
        count += 1;
    };
}

console.log(` a =  ${count}`);

// Count any letter in any String

function findLetters(letter, str) {
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter.toUpperCase() || str[i] == letter.toLowerCase()) {
            count += 1;
        }
    }
    console.log(` ${letter} =  ${count}`);
}

findLetters('a', "WebBrainAcadAmiya");

// Sonni 10 taga ko'paytir web ni IT ga almashtir

var str = "webBrain";
var newStr = str.replace("web", "IT")
for (let i = 0; i < 10; i++) {
    console.log(newStr);
}