// async await >> promise chains >> callback hell

// Sync in JS --> jis sequence me code likha hai usi sequence me run hoga.
// Example :
// console.log("one");
// console.log("two");
// console.log("three");

/* async in JS --> agr koi block of code (Ex: API's) jyada time le rhe hai load hone me
    to unko parallely chalo aur baki ka bacha hua code execute krdo, fir jb vo code run ho
    jaye too uska output dikha do.
*/
// Ex: both the statements will print first and then the hello will print after set time.
console.log("statement 1");
setTimeout( () => {
    console.log("Async Example");
}, 2000); // timeout --> 2 sec baad output dikhega
console.log("statement 2");

// **************** Callbacks **********************
// A callback is a function passed as an argument to another function.
function Hello() {
    console.log('Callback Example');
}
setTimeout(Hello, 3000); // here we are calling hello function in another function.

//*************** Callback Hell *******************
// Nested callbacks stacked below one another forming a pyramid structure.(pyramid of Doom)
// This style of programming becomes difficult to understand & manage.

