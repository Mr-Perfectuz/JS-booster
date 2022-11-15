
// Find any letter iwithin the object values

var arr = [
    { id: 1, name: 'Fozil' },
    { id: 2, name: 'Odil' },
    { id: 3, name: 'Asilbek' },
    { id: 4, name: 'Elyor' },
]

function onSearch(text) {
    var text2 = text.toUpperCase()
    for (var i = 0; i < arr.length; i++) {
        if ((arr)[i].name.includes(text) || (arr)[i].name.includes(text2)) {
            console.log(Object.entries(arr)[i]);
        }
    }
}
onSearch('f');


// Birinchi kelgan juftlikni toping
function findLetter(str) {
    str = str.split('');
    let result = "";
    str.map((e, i) => {
        if (str[i] === str[i + 1]) {
            result += str[i];
        }
    })
    return result[0];
}

console.log(findLetter("ABBACC"));
