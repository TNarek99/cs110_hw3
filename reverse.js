const reverse = function (array) {
    const reverseArray = [];
    const length = array.length;

    for (let step = length - 1; step >= 0; step--) {
        reverseArray.push(array[step]);
    }

    return reverseArray;
};