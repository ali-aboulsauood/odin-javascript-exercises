const repeatString = function(string, numberOfTimes) {
    if (+numberOfTimes < 0) return 'ERROR';

    let resultString = "";

    for (let i = 1; i <= numberOfTimes; i++) resultString += string;

    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
