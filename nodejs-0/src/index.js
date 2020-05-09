'use strict'

const fibonacci = () => {
    let num1 = 0;
    let num2 = 1;
    let num3 = 0;

    const fibSequence = [num1, num2];

    while (num3 < 350) {
        num3 = num1 + num2;
        fibSequence.push(num3);
        num1 = num2;
        num2 = num3;
    }

    return fibSequence;
}

const isFibonnaci = (num) => {
    const fibSequence = fibonacci();
    const index = fibSequence.findIndex(element => element === num);
    return index >= 0;
}

module.exports = {
    fibonacci,
    isFibonnaci
}
