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
1. tagName : returns tag for elements nodes
2. innerText : returns the text content of the element and all it's children
3. innerHTML : returns the plain text or HTML contents in the element
4. textContent : returns textual content even for hidden elements
*/

// Attributes :
/*
1. getAttributes(attr) --> to get the attribute value
2. setAttribute(attr, value) --> to set attribute value
*/

// Style :
// 1. node.style --> Ex : div.style --> inline style dekhne ke kaam ata hai.

// Insert Elements :
/*
the query --> let el = document.createElement("div");
1. node.append(el) --> to add at the end of the node(inside)
2. node.prepend(el) --> adds at the start of the node(inside)
3. node.before(el) --> adds before the node(outside)
4. node.after(el) --> adds after the node(outside)
*/

// Delete Elements:
/*
1. node.remove() --> remove the node

*/