let fullName = "Rohit Gore";
let age = 24;
let marks = 99.99;
// null aur undefined me farak hita hai dono same nhi hote.
let x = null; // pta hai andar kya par vo khali value hai.
let y = undefined; // pta hi nhi hai ki andar kya hai, koi idea hii nhi hai.
console.log(fullName,"->", age, "->", marks, "->", x, "->", y);

// objects
const student = {
    fullName : "Rohit Gore",
    age : 22,
    cgpa : 4.5,
    isPass : true,
};

console.log(student);

student.cgpa = student.cgpa + 1; // aise bhi value increment kr skte hai
student["age"] = student["age"] + 1; // aise bhi kr skte hai
student.fullName = "Rohit";

console.log(student.fullName); // agr dot use kr rhe hai too no quotes.
console.log(student["age"]); // age sq. bracket use kr rhe hai too quotes.
console.log(student.cgpa) ;

