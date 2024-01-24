/* Inheritance in JS :
    Inheritance is passing down properties & methods from parent class to child class.

syntax :
    class Parent {

    }
    class Child extends Parent{

    }

* If child & Parent have same methods, child's methods will be used.
    this is called [Method Overriding].
*/

class Human{
    constructor(species){
        this.species = species;
    }
    eat(){
        console.log("khana kha le");
    }

    sleep(){
        console.log("soo jao");
    }

    work(){
        console.log("abhi kuch nhi kr rha hai.")
    }
}

class Engineer extends Human{
    work(){
        console.log("Solve Problems, create something");
    }
}

class Doctor extends Human{
    work(){
        console.log("Patient ki jaan bacha le");
    }
}

let person = new Human("Homosepiens");
let Engi = new Engineer("Engineer hu bhai");
let Doc = new Doctor("Ye bhi homo hii hote hai");

/* Super Keyword : 
    The super Keyword is used to call the constructor of it's parent class
    to access the parent's properties and methods.

super(args) // call's Parent's constructor
super.parentMethod(args)
*/

/**  Error Handling :
    try-catch:
syntax:
    try{
        ....normal code ....
    }catch(error){
        .... handling error ....
    }
*/