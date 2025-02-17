const sumAll = function(start, end) {
    const includesNaN = (Number.isNaN(start) || Number.isNaN(end));
    const includesNonInteger = (start !== Math.trunc(start) || end !== Math.trunc(end));
    const includesNegative = (start < 0 || end < 0);

    if (includesNaN || includesNonInteger || includesNegative) return 'ERROR';

    const start_ = Math.min(start, end), end_ = Math.max(start, end);

    let sum = 0;
    for (let i = start_; i <= end_; i++) sum += i;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
