/* LOOPS and STRINGS IN JAVASCRIPT */

for(let i=0; i<5; i++){
    console.log("for loop");
}

// console.log(i); 
/* Here we get an error that i is not defined.
the common reason being that i is declared inside the for loop.
but, if we use 'var' to declare i in for loop instead of 'let' then we won't get the error
because, any variable declared using 'var' is global.
but, we prefer use of 'let' over 'var'.
*/

let sum = 0;
for(let i=1; i<=5; i++){
    sum += i;
}
console.log("sum: " + sum);

// Two special types of loops :
// 1. for-of loop
// 2. for-in loop

// FOR - OF LOOP --> string aur arrays ke liye use krte hai.
let str = "JavaScript";
let size = 0;
for(let val of str){
    // iterator -> characters
    console.log("val = ", val);
    size++;
}
console.log("string size = ", size); // 10

// FOR - IN LOOP --> objects ke liye use kr skte hai
let student = {
    name : "rohit",
    age : 22,
    cgpa : 7.78,
    isPass : true,
};

for(let i in student){
    console.log(i);
}

// practice 1:
// let n = 100;
// for(let i = 0; i<= 100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

/* STRINGS IN JS */

let s = "javascript";
console.log(s);

// string length
let len = s.length;
console.log(len);

// string indices
console.log(s[0]);

// TEMPLATE LITERALS:
// a way to have embedded expressions in strings
// we use backtick(` `) here. Ex: `This is a template literal`
// we use it to create strings by doing substitution of placeholders called string interpolation.
// `string text ${expression} string text`

// Example : real life use, difference b/w normal way of printing and printing using template literals.
let obj = {
    pen : "pen",
    price : 10,
};
// normal way of printing:
console.log("The cost of", obj.pen, "is", obj.price, "rupees");
// using template literala
console.log(`The cost of ${obj.pen} is ${obj.price} rupees`);
// in output you can see that the '10' is not highlighted because now it is part of the string itself.

