// Arrays -> collection of items, mutable hota hai.

let marks = [93, 91, 94, 83, 80, 23, 44];
console.log(marks);
console.log(marks.length);
console.log(typeof(marks)); // arrays are objects in JS.

// array indices:
console.log(marks[1], marks[6]);
marks[2] = 66;
console.log(marks);

// Loops in arrays & practice : 1
let sum = 0;
for(let i=0; i<marks.length; i++){
    sum += marks[i];
}
let avg = sum / marks.length;
console.log(`the avg marks of the class is ${avg}`);

// for(let it of marks){ // using for of loop
//     console.log(it);
// }



// Loops in arrays & practice : 2
let items = [250, 645, 300, 900, 50];
let offer = 10;
for(let i=0; i<items.length; i++){
    let off = items[i] / offer ;
    items[i] = items[i] - off; 
}
console.log(`the items list after applying the offer is = ${items}`);


// Array methods: (sare methods small letters se start hote hai.)
/* 
push(): add to end.
pop(): delete from end & return. 
toString():converts array to string. 
.concat() : add two arrays.
unshift() : add to start
shift() : delete from start and return
slice() :  returns a piece of array (original me change nhi krta)
splice() : change original array (add, remove, replace)

*/