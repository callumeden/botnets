module.exports = function (valueToCompare, operator, valueComparedAgainst, options) {
    if (operator === '>') {
        return valueToCompare > valueComparedAgainst ? options.fn(this) : options.inverse(this);
    }

    if (operator === '<') {
        return valueToCompare < valueComparedAgainst ? options.fn(this) : options.inverse(this);
    }

    if(operator === '==') {
        return valueToCompare == valueComparedAgainst ? options.fn(this) : options.inverse(this);
    }
};
