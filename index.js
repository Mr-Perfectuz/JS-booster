// 1)

// var a = 4, p;
// p = 4 * a;
// console.log(p);

// 2)
// let a = 6;
// let s = Math.pow(a, 2);

// console.log(s);

// 3)
// let a , b;
// let s = a * b;
// let p = 2 * (a + b);
// console.log(p);
// console.log(s);

// 4)
// let d;
// const p = 3.14;
// let l = p * d;
// console.log(l);

// 5)
// var a;
// let v = Math.pow(3, a);
// let s = 6 * a * a;
// console.log(v);
// console.log(s);

// 6)
// var a, b, c, V, S;
// V = a * b * c;
// S = 2 * (a * b + b * c + a * c);
// console.log(S);
// console.log(V);

// 7)
// var r, L, S;
// const p = 3.14;
// L = 2 * p * r;
// S = p * Math.pow(2, r);
// console.log(L);
// console.log(S);

// 8)
// var a, b, average;
// average = (a + b) / 2;
// console.log(average);

// 9)
// var a = 3, b = 12, c;
// c = Math.sqrt(a * b);
// console.log(c);

// 10)
// var a = 3, b = 4, sum, mult, multa, multb;
// a > 0;
// b > 0;
// sum = a + b;
// mult = a * b;
// multa = Math.pow(a, 2);
// multb = Math.pow(b, 2);
// console.log(sum);
// console.log(mult);
// console.log(multa);
// console.log(multb);


// 11)
// var a , b, sum, mult, moda, modb;
// a != 0;
// b != 0;
// sum = a + b;
// mult = a * b;
// moda = Math.abs(a);
// modb = Math.abs(b);
// console.log(sum);
// console.log(mult);
// console.log(moda);
// console.log(modb);

// 12)
// var a, b, c, p;
// c = Math.sqrt(a * a + b * b);
// p = a + b + c;
// console.log(c);
// console.log(p);

function highAndLow(numbers) {
    let str = numbers.toString();
    let maxNumber = 0;
    let minNumber = 0;
    maxNumber = Math.max(numbers);
    // console.log(str);
    return Math.max(numbers);;
}

console.log(highAndLow("1 2 3"));