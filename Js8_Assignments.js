// 1) Berilgan code ni encoding qilish /// This is not an optimal solution
function encode(array) {
    array = array.split('');
    let result = "";
    let counter = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            counter++;
        } else {
            result += array[i] + counter;
            counter = 1;
        }
    }
    return result;
}

console.log(encode("AAABBBCCA"));


// 2) Find the minimum and maximum value of an array

function minMax(arr) {
    return `{max = ${Math.max(...arr)} min = ${Math.min(...arr)} }`
}
console.log(minMax([4, 10, 888, 99, 100]));



// 3) Remove a child from array


function deleteMeva(str) {
    var arr = ["olma", "nok", "banan", "olma", "tarvuz"];
    arr.shift(str);
    return arr;
}
console.log(deleteMeva("olma"));