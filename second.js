console.log("Hello world!");

// Operators:

let a = 5, b = 2;
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b); // 5 ^ 2 = 25
console.log("a++ = ", a++, " & b++ = ", b++); // post increment
console.log("++a = ", ++a, " & ++b = ", ++b); // pre increment
console.log("a-- = ", a--, " & b-- = ", b--); // post decrement
console.log("--a = ", --a, " & --b = ", --b); // pre decrement


// comparison operators:

a = 5; // number
b = "5"; // string
console.log("a == b", a == b); // return : true
console.log("a != b", a != b); // return : false
/* yha javascript pehle dekhta hai ki string me ek hii number hai too vo usko pehle
number me convert krta hai aur compare krta hai, isiliye hme true return krta hai */


a = 5; // number
b = "5"; // string
console.log("a === b", a === b); // returns: false
console.log("a !== b", a !== b); // returns: true
/* === is a stricter version of == this will also check for the datatypes and all */

// conditional statements:

let mode = "dark";
let color;
if(mode === "dark"){
    color = "black";
}else{
    color = "white";
}

// if(mode === "light"){
//     color = "white";
// }else{
//     color = "black";
// }
console.log(color);

/* Ternary operator:
    syntax:
        condition ? true output : false output
    basically : a ? b : c
    where : a = conditon
            b = output if conditon is true
            c = output if conditon is false

    Example : age > 18 ? "adult" : "not adult";
*/
let age = 25;
let res = age >= 18 ? "Adult" : "not Adult"; // compact if-else
console.log(res);

// practice Qs - 1:
let num = prompt("enter a number");
if(num % 5 === 0){
    console.log(num, "is a multiple of 5");
}else{
    console.log(num, "is not a multiple of 5");
}