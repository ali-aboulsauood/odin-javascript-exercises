/*
const removeFromArray = function(array, ...elementsToRemove) {
    let newArray = [];

    for (const element of array) {
        if (elementsToRemove.includes(element)) continue;

        newArray.push(element);
    }

    return newArray;
};
*/

// A common convention is to name the rest parameter `args`.

/*
const removeFromArray = function(array, ...elementsToRemove) {
    let newArray = [];

    array.forEach((element) => { if (!elementsToRemove.includes(element)) newArray.push(element); });

    return newArray;
}
*/

const removeFromArray = function(array, ...elementsToRemove) {
    return array.filter(element => !elementsToRemove.includes(element));
}

// Do not edit below this line
module.exports = removeFromArray;
