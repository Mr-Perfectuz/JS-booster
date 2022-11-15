// 1) Kim yutadi o'yini

function whoWins(num) {
    return (num % 2 == 0) ? "Alice win, Bob lose"
        : "Bob win, Alice lose";
}

console.log(whoWins(6));


// 2)  3 ga va 5ga bo'linuvchi sonlarni topish

function findDivistion(num) {
    return (num % 3 == 0 && num % 5 == 0) ? "3ga va 5ga bo'linadi"
        : (num % 5 == 0) ? "5 ga bo'linadi"
            : (num % 3 == 0) ? "3ga bo'linadi"
                : "Wrong input";
}


// 3) Change numbers to letters


let calculate = (num) => {
    let yuzlik = Math.floor(num / 100);
    num = num % 100;
    let onlik = Math.floor(num / 10);
    let birlik = num % 10;

    let birlikNUmbers = ["", "bir", "ikki", "uch", "to'rt", "besh", "olti", "yetti", "sakkiz", "to'qqiz"];
    let onlikNUmbers = ["", "o'n", "yigirma", "o'ttiz", "qirq", "ellik", "oltmish", "yetmish", "sakson", "to'qson"];

    return (yuzlik != 0) ? `${birlikNUmbers[yuzlik]} yuz ${onlikNUmbers[onlik]} ${birlikNUmbers[birlik]}`
        : `${onlikNUmbers[onlik]} ${birlikNUmbers[birlik]}`.trim();

}

console.log(calculate(1));