const g15 = [
    {
        id: 1,
        name: 'Abdulaziz',
        age: 20,
        job: "developer"
    },
    {
        id: 2,
        name: 'Shaxzodbek',
        age: 21,
        job: "developer"
    },
    {
        id: 3,
        name: 'Farrux',
        age: 25,
        job: "developer"
    },

    {
        id: 4,
        name: 'Ahtambek',
        age: 22,
        job: "developer"
    },

    {
        id: 5,
        name: 'Miras',
        age: 27,
        job: "developer"
    },

    {
        id: 6,
        name: 'Islomjon',
        age: 25,
        job: "developer"
    },

    {
        id: 7,
        name: 'Asrorbek',
        age: 30,
        job: "developer"
    },
]

//  Using for loop to search ID
function SearchId(input) {
    var result = [];
    for (var i = 0; i < g15.length; i++) {
        if (g15[i].id == (input)) {
            result.push(g15[i]);
        };
    }
    return result;
}
// console.log(SearchId(2));



//  Using  map() method to search ID
function SearchId(input) {
    var result = [];
    g15.map((value) => {
        return (value.id === input) ? result.push(value) : result;
    });
    return result;
}
// console.log(SearchId(2));




//  Using  find() method to search ID
function SearchId(input) {
    const result = g15.find(({ id }) => id === input);
    console.log(result);
}
// SearchId(4);


// 2) Age bo'yicha sort qilish

// use slice() to copy the array and not just make a reference
var byDate = g15.slice(0);
byDate.sort(function (a, b) {
    return a.age - b.age;
});
// console.log(byDate);


// 3) Function orqali yangi user qo'shish
function addUser(newId, newName, newAge, newJob) {
    g15.push({
        id: newId,
        name: newName,
        age: newAge,
        job: newJob
    });

    console.log(g15);
}

addUser(8, "Abu", 40, "developer");
addUser(9, "Adham", 22, "student");
