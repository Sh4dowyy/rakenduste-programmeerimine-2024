//Exercise 1. Make a list and find index of a number

const list = [1, 10, 100, 1000, 10000];



let position = list.indexOf(10);
console.log(position);



function findIndex(array, num) {
    return list.indexOf(num);
}
console.log(findIndex(list, 10))

//Exercise 2. Add 2 numbers

function addNumbersFn(num1, num2){
    return num1 + num2
}
console.log(addNumbersFn(3, 4))


// Exercise 3. Remake with arrow function

const addNumberArrowFn = (num1, num2) => {
    return num1 + num2;
};
console.log(addNumberArrowFn(1, 2))


// Exercise 4. Remake with shorthand arrow function

const addNumberArrowFnShort = (num1, num2) => num1 + num2;
console.log(addNumberArrowFnShort(5, 6))


// Exercise 5. Luua funktsioon sellisel kujul, et saaks kutsuda välja seda nii:

function addNumbersNested(num1){
    return function (num2) {
        return num1 + num2        
    }
}
console.log(addNumbersNested(3)(4))



// Ex 6. Arrow function

const addNumbersNestedArrow = (num1) => (num2) => num1 + num2;

console.log(addNumbersNestedArrow(2)(4));


// Ex 7. AF printida "Hello (nimi)" ja kasutada string literals

const greet = (name = "World") => `Hello ${name}`;

console.log(greet());
console.log(greet("Dmitrii"));


// Ex 8. Liita igale elemendile juurde +5, et uuel muutujale omandaks

const newArray = [1, 2, 3, 4, 5];

const addedArray = newArray.map((element) => element + 5);
console.log(addedArray)


// Ex 9. 

const threeParameters = newArray.map((element, index, array) => {
    console.log(element, index, array)

    const added = 1 + 2;

    return element + 5;
});

console.log({ threeParameters })
