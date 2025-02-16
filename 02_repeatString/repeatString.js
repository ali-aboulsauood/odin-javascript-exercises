const repeatString = function(string, numberOfTimes) {
    let resultString = "";

    for (let i = 1; i <= numberOfTimes; i++) {
        resultString += string;
    }

    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
