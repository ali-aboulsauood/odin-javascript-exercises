const repeatString = function(string, numberOfTimes) {
    let resultString = "";

    if (+numberOfTimes < 0) {
        return 'ERROR';
    }

    for (let i = 1; i <= numberOfTimes; i++) {
        resultString += string;
    }

    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
