/* Prototypes in JS:
Objects in JS : 
    A JS object is an entity having state and behavior(properties and method).
    JS objects have a special property called prototype.
    we can set prototype using __proto__

*If object & prototype have same method, object's method will be used.

Prototype ka type ek reference hota hai. ya too ye NULL hoga ya fir ye ek reference hoga to an object.
*/

// object student is created.
const student = {
    fullName : "rohit", marks : 98, // properties / states hai
    printMarks : function () { // functions ko methods bhi kehte hai. 
        //inko hm apne obj. ka behaviour bhi keh skte hai
        console.log("marks = ", this.marks);
    },
};

// Object employee is created, it has a function called calcTax:
const employee = {
    calcTax() {
        console.log("tax rate is 10%"); 
    }
}

// __proto__ used to set a prototype, mtlab jis bhi object ko prototype bnarhe hai
// uske functions hm hmare first obj me use kr payenge.

const karanArjun = {
    salary : 5000,
}

karanArjun.__proto__ = employee;

/* Classes in JS :
    class is a program code template for creating obj.
    Those objects will have some state(variables) & some behaviour(functions) inside it.

Syntax:
    class MyClass {
        constructor(){ .... }
        myMethod(){ .... }
    }

    let myObj = new MyClass();
* 'new' keyword constructor ko dhundta hai, aur agr usko nhi mila to vo class ek constructor automatically bna deta hai.

Constructor() method in JS: (constructor is a reserved keyword)
    - automatically invoked by new object
    - initializes object

*/

class toyota{
    constructor(brand, milage){
        console.log("I am a constructor");
        this.brand = brand;
        this.milage = milage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

let car = new toyota("corolla", 20);
console.log(car);
let car2 = new toyota("prius", 50); 
console.log(car2);
// even if we don't pass a argument the constructor will give undefined.