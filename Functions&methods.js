/*
Function : Block of code that performs a specific task, can be invoked whenever needed.
 */

/*
Function definiton:

function funcName(){
    code here
}

function funcName(param1, param2, ....){
    code here
}

Function Call (or) Invoke:

funcName();
*/

function myFunc(){ // function defined
    console.log(`welcome to JS`);
}
myFunc(); // function invoked

function meraFunc(msg){ // parameterised function
    console.log(msg);
}
let msg = "parameterised function hai ye";
meraFunc(msg); // argument pass kr rhe hai

/*
Arrow Fucntions : functions ko likhne ka compact tarika.

const arrowFunction = (a, b) => {
    console.log("this is arrow function");
    console.log(a + b);

    main arrow function too right side wala part hai.
    usko hmne bss ek variable arrowFunction ko assign kr diya hai.
    'const arrowFunction' bss ek variable hai, vo arrow fucntion me nhi ata.
}
 */

let a = 10, b = 5;
// Normal function :
function sum(a,b){ 
    return a+b;
}

function multi(a, b){
    return a*b;
}

// arrow function:
const arrowSum = (a, b) => {
    console.log(a+b);
}

const arrowMulti = (a, b) => {
    return a*b;
}

console.log(multi(a, b));
console.log(arrowMulti(a, b));

// hmesha bracketts me kuch pass krna compulsory nhi hota.
const printFunc = () =>{
    console.log("Helllo World, this is an arrow function.");
}

/* *********** forEach loop in arrays *************** */
// Ye ek Higher Order Function/Method hai.
// tb use krte hai jb array ya fir koi DS ke hrr element pr kaam krna hota hai.
// arr.forEach(callBackFunction)
// callBack function : Here, it is a function to execute for each element in the array.
// A callback is a function passed as an argument to another function.
// callback function ko hmesha arrow function bnake pass krte hai.

let arr = [1,2,3,4,5];

// arr.forEach(function printVal(val){ // each val at each idx
//     console.log(val);
// })

arr.forEach((val, idx, arr) => {
    console.log(val, idx, arr);
})

/* ************ Map Method : very similar to forEach *********** */
// differnce : Map hme naya array return krke deta hai, forEach nhi
// diff in EN : Creates a new Array with the results of some operations. The value its callback returns are used to form new array.

// arr.map(callbackFnx(val, idx, arr))

let nums = [67, 88, 33, 54];

const newArr = nums.map((val) => {
    return val*val;
})

console.log(newArr);

/* ************** Filter Method : *************** */
// Creates a new array of elements that give true for a condition / filter.
// Eg: all even elements
/*
    let newArr = arr.filter((val) => {
        return val % 2 === 0;
    })
*/

// basically jo bhi val condition pass kregi vo nye array me jayegi nhi too nhi jayegi. yhi hai filter krna.
let evenArr = arr.filter((val) => {
    return val % 2 === 0; // even values filter ho rhi hai idhr.
})

console.log(evenArr);

/* ********* reduce method : *********** */
// jha pr input bahut sare hote hai pr output ek hii hota hai wha reduce ko use kra jata hai.
// Performs some operations & reduces the array to a single value. It returns that single value.

const output = nums.reduce((prev, curr) => {
    return prev + curr;
})

const output1 = nums.reduce((prev, curr) => {
    return prev > curr ? prev : curr; // to print largest num in nums.
})

console.log(output); // 67 + 88 + 33 + 54
console.log(output1);