
var menu = document.querySelector('#menu');

function getDataInfo(element) {
    var arrayOfElements = [];
    myList = element.querySelectorAll('li');
    for (var i=0;i<myList.length;i++){
        arrayOfElements.push(myList[i].innerHTML)
    }
    return arrayOfElements

}
console.log('Ex 1');
console.log(getDataInfo(menu));


var container = document.querySelector('#main-contener');

function getElementClass(element) {
    var firstChildren = element.children;
    var classList = [];
    for (var i=0; i<firstChildren.length;i++) {
        classList.push(firstChildren[i].className)
    }
    return classList
}
console.log('Ex 2');
console.log(getElementClass(container));

var thisClasses = document.querySelectorAll('.pink-color');
var thisClass = document.querySelector('.pink-color');

console.log(thisClass);

function getElementText(element) {
    if (NodeList.prototype.isPrototypeOf(element)) {
    var innerTextList = [];
        for (var i=0;i<element.length;i++){
            innerTextList.push(element[i].innerHTML)
        }
    return innerTextList;
    } else {
    return element.innerHTML;
    }

}

console.log('Ex 3');
console.log(getElementText(thisClass));
console.log(getElementText(thisClasses));

var images = document.querySelectorAll('.images')

function getElementAlt(element) {
    var alternativeText = []
    element.forEach(image => {
        console.log(image.getAttribute('alt'))
        alternativeText.push(image.getAttribute('alt'))
    })
    return alternativeText
}
console.log('Ex 4');
console.log(getElementAlt(images));

var elementByClass = document.querySelectorAll('.my-link');

function getElementHref(element) {
    var linksToSave = [];
    element.forEach(element => {
        linksToSave.push(element.getAttribute('href'))
    });
    return linksToSave
}

console.log('Ex 5');
console.log(getElementHref(elementByClass));
