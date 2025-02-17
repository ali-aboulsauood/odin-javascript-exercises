const removeFromArray = function(array, ...elementsToRemove) {
    let newArray = [];

    for (const element of array) {
        if (elementsToRemove.includes(element)) continue;

        newArray.push(element);
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
