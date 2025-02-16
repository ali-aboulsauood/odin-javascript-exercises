const removeFromArray = function(array, elementToRemove) {
    const indexOfElementToRemove = array.indexOf(elementToRemove);

    return array.slice(0, indexOfElementToRemove).concat(array.slice(indexOfElementToRemove + 1));
};

// Do not edit below this line
module.exports = removeFromArray;
