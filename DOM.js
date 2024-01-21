/* DOM -> Document Object Model:
    When a web page is loaded, the browser creates a Document Object Model of the page.
    HTML ko JS ke andr access krne ka tarika hai DOM.
    DOM ka sbse bada faida hai dynamic changes krna web page me.
*/
/*
Window Object:
    The window object represents an open window in a browser.
    It is browser's object (not JS's) & automatically created by browser.

    It is a global object with lots of properties & methods.
*/

// DOM Manupulation :
/*
1. Selecting with id --> document.getElementById("myId");
    in CSS id is represented by '#' in front of the name. id's are unique
2. Selecting with class --> document.getElementsByClassName("myClass");
    in CSS class is represented by using '.' in front of the name. class is not unique
3. Selecting with tag --> document.getElementByTagName("p");
*/

// Query Selector :
/*
1. document.querySelector("myId / myClass/ tag")
    returns first element of the passed parameter.
    Isme parameter pass krte wkt agr vo id hai too uske samne '#' lgao, class hai too '.' lgao.

2. document.querySelectorAll("myId / myClass / tag")
    return a NodeList.
*/

// Properties :
/*
1. tagName : 
*/