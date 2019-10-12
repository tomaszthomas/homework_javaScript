document.addEventListener('DOMContentLoaded', function(){

    function getNumber(number, arrayOfNumbers) {

        for (var i = 0; i < arrayOfNumbers.length; i++) {
            var arrayElement = arrayOfNumbers[i];
            if (number === arrayElement) {
                return true;
            }
        }
        return false
    }
    console.log('Zad 1')
    console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
    console.log(getNumber(5, [33, 54, 2, 1, 4, 100]));

    function createIdentityMatrix(rows, columns) {
        var table = new Array(rows);
        for (var i=0; i<rows;i++) {
            table[i] = new Array(columns)
        }
        for (var i=0;i<rows;i++) {
            for (var j=0;j<columns;j++){
                    table[i][j] = 0
                    if (i === j) {
                        table[i][j] = 1
                    }
            }
        }
        console.log(table)
    }
    console.log('Zad 2')
    createIdentityMatrix(4,4)

    function Tree(type) {

        this.type = type;
        this.hello = function hello() {
            console.log("I am a tree of type " + type)
        };
        this.bloom = function Bloom() {
            console.log("I'm blooming.")
        };
    };

    console.log('Zad 3');

    var pineTree = new Tree("Pine");
    var willowTree = new Tree("Willow");
    var pomgranateTree = new Tree("Pomegranate");

    pineTree.hello();
    pineTree.bloom();
    console.log(pineTree.hasOwnProperty('bloom'))
    willowTree.hello();
    willowTree.bloom();
    pomgranateTree.hello();
    pomgranateTree.bloom();

    function addTheSameNumbers(number, array) {
        var result = [];
        var sum = 0;
        for (var i=0; i<array.length; i++) {
            if (array[i] === number) {
                result.push(array[i]);
            }

            }
        for (var i=0;i<result.length;i++) {
            sum += result[i];

        }
        return sum
    }

    console.log('Zad extra 1');
    console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
    console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));
    console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));
    console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));

    function factor(number) {
        if (number<=0) {
            var divisors = [];
            return divisors;
        }
        var divisors = [];
        var listToCheck = [];

        for (var i=1; i<=number;i++){
            listToCheck.push(i)
        }
        for (var i=0; i<listToCheck.length;i++) {
            if (number % listToCheck[i] === 0) {
                divisors.push(listToCheck[i])
            }
        }
        console.log(listToCheck);
        console.log(divisors.sort(function(a, b){return b-a}));


    }
    console.log('Zad extra 2')
    factor(2);
    factor(54);
    factor(-4)

    function getMissingElement(array) {
        var offset = 0
        for (var i=1; i<array.length; i++) {
            if (Math.abs(array[i]-array[i-1]) !== 1) {
                offset = array.indexOf(array[i]);
                return offset
            }
        }
        return null;
    }

    console.log('Zad extra 3');
    console.log(getMissingElement([1,2,3,4,5,6,7]));
    console.log(getMissingElement([6,7,8,10,11,12,13,14,15]));
    console.log(getMissingElement([-4,-3,-2,0,1,2,3,4]));

    function getLastNumbers(number, array) {
        if (Array.isArray(number) === true) {
            console.log("first number is an array");
            return []
        }
        if (typeof number === 'string' || Array.isArray(number) === true) {
            console.log("first number is either missing or is not numeric");
            return null
        }
        array.reverse();
        var slicedArray = [];
        for (var i=0; i<number; i++) {
            slicedArray.push(array[i])
        }
        console.log(slicedArray)

    }

    console.log('Zad extra 4');
    getLastNumbers(2, [1,2,3,4,5,6,7]);
    getLastNumbers(4, [6,7,8,10,11,12,13,14,15]);//=> [12, 13, 14, 15]
    getLastNumbers([-4,-3,-2,0,1,2,3,4]);// => []
    getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4]);//=> []

});