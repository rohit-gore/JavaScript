/**
* The change in the state of an object is known as an Event.
* Events are fired to notify code of "intersting changes" that may affect code execution.

1. Mouse Events (click, double click etc.)
2. Keyboard events (keypress, keyup, keydown)
3. Form events(submit etc.)
4. Print events & many more.
*/

// Event Handling :
/*
node.event = () => {
    ** handle here **
    Eg. btn.onclick or btn.ondblclick etc.
}
*/

let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("I was clicked :)");
    let a = 20;
    a++;
    console.log(a); // 21
}

/*
1. If we are using Inline JS to handle an event and also using JS file to handle an event,
then the code in JS file will get priority.

2. agr hmne ek br koi event ko handle kr liye too dobara se nhi kr skte same.
jaise ki upr jo onclick event hai agr hmne ek dusra onclick event bnaya same btn pr too purana wala override ho jayega.
*/

// Event Object :
/*
It is a special object that has details about the event.
All event handlers have access to the Event Object's properties and methods.

node.event = (e) => {
    **handle here**
}
eg: e.target, e.type, e.clientX, e.clientY etc.
*/

btn1. onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}

// Event Listeners:
/*
node.addEventListeners(event, callback)
node.removeEventListener(event, callback)  --> event remove ho jata hai.
*Note : the callback reference should be same to remove

Same event ke liye multiple eventlisteners use kr skte hai, hmesha eventlisteners hii use krenge.
*/

btn1.addEventListener("click", (evt) => {
    console.log("ye addEventListeners hai");
    console.log(evt.type);
    console.log(evt.target);
})