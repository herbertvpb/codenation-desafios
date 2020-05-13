'use strict'

const fibonacci = () => {
    let nextNumber = 0;
    const fibSequence = [0, 1];

    while (nextNumber < 350) {
        nextNumber = fibSequence[fibSequence.length - 2] + fibSequence[fibSequence.length - 1];
        fibSequence.push(nextNumber);
    }

    return fibSequence;
}

const isFibonnaci = (num) => {
    if (!isNaN(num) && num >= 0) {
        const fibSequence = fibonacci();
        return fibSequence.includes(num);
    }
    return false;    
}

module.exports = {
    fibonacci,
    isFibonnaci
}
