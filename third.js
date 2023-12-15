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