
var summaryPrice = document.querySelector('#price');
var checkboxes = document.querySelectorAll('.checkbox');
var selectAll = checkboxes[0];
var clearAll = checkboxes[checkboxes.length-1];
var pizzaIngredients = [];
var currentPrice = 0
var submitButton = document.querySelector('.btn')
for (var i=0;i<checkboxes.length;i++){
    if (i !== 0){
        if (i !== (checkboxes.length-1))
        pizzaIngredients.push(checkboxes[i])
    }
}

document.addEventListener('DOMContentLoaded', function () {
    pizzaIngredients.forEach(element => {
            element.firstElementChild.firstElementChild.checked = false;
        });
    selectAll.firstElementChild.firstElementChild.checked = false;
    clearAll.firstElementChild.firstElementChild.checked = false;
    currentPrice = 0;
})

console.log(selectAll);
console.log(clearAll);
console.log(pizzaIngredients);

pizzaIngredients[0].dataset['price'] = 30;

console.log(pizzaIngredients[0].outerHTML);

function selectAllIngredients() {
    if (this.firstElementChild.firstElementChild.checked){
        pizzaIngredients.forEach(element => {
            element.firstElementChild.firstElementChild.checked = true;
            currentPrice += parseFloat(element.firstElementChild.firstElementChild.dataset.price)
        });
        summaryPrice.innerHTML = roundIt(currentPrice,2)+' zł';
    } else {
        pizzaIngredients.forEach(element => {
            element.firstElementChild.firstElementChild.checked = false;
        });
        currentPrice = 0;
        summaryPrice.innerHTML = roundIt(currentPrice,2)+' zł';

    }
}
selectAll.addEventListener('change', selectAllIngredients);

function modifyCurrentPrice() {
    if (this.firstElementChild.firstElementChild.checked){
        currentPrice += parseFloat(this.firstElementChild.firstElementChild.dataset.price)
        summaryPrice.innerHTML = roundIt(currentPrice,2)+' zł';
    } else {
        currentPrice -= parseFloat(this.firstElementChild.firstElementChild.dataset.price)
        summaryPrice.innerHTML = roundIt(currentPrice,2)+' zł';
    }
}
for (var i=0;i<pizzaIngredients.length;i++){
    pizzaIngredients[i].addEventListener('change', modifyCurrentPrice)
}

function roundIt(num, precision) {
    var rounder = Math.pow(10, precision);
    return (Math.round(num * rounder) / rounder).toFixed(precision)
};

clearAll.addEventListener('change', clearCurrentPrice)

function clearCurrentPrice() {
    if (this.firstElementChild.firstElementChild.checked){
        pizzaIngredients.forEach(element => {
            element.firstElementChild.firstElementChild.checked = false;
        });
        if (selectAll.firstElementChild.firstElementChild.checked) {
            selectAll.firstElementChild.firstElementChild.checked = false
        }
        currentPrice = 0;
        summaryPrice.innerHTML = roundIt(currentPrice,2)+' zł';
    } else {

    }
}

function submitPizzaOrder(e) {
    e.preventDefault()
    var info = document.createElement('div')
    var mainDiv = document.querySelector('.page-header')
    info.innerText = "Do zapłaty: [ "+ roundIt(currentPrice,2)+' zł' + " ]"
    mainDiv.appendChild(info)
}


submitButton.addEventListener('click', submitPizzaOrder)






