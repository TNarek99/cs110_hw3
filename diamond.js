const starsRow = function (starCount) {
    let rowString = '';

    for (let step = 1; step <= starCount; step++) {
        rowString = rowString + '*';
    }

    return rowString;
};

const spaceRow = function (spaceCount) {
    let rowString = '';

    for (let step = 1; step <= spaceCount; step++) {
        rowString = rowString + ' ';
    }

    return rowString;
};

const upperDiamond = function (length) {
    const stepCount = (length + 1) / 2;
    let rowStars = 1;
    let rowSpace = (length - 1) / 2;

    for (let step = 1; step <= stepCount; step++) {
        console.log(spaceRow(rowSpace) + starsRow(rowStars));

        rowStars = rowStars + 2;
        rowSpace = rowSpace - 1;
    }
};

const lowerDiamond = function (length) {
    const stepCount = (length - 1) / 2;
    let rowStars = length - 2;
    let rowSpace = 1;

    for (let step = 1; step <= stepCount; step++) {
        console.log(spaceRow(rowSpace) + starsRow(rowStars));

        rowStars = rowStars - 2;
        rowSpace = rowSpace + 1;
    }
};

const diamond = function (length) {
    if (length % 2 === 0) {
        length = length + 1;
    }

    upperDiamond(length);
    lowerDiamond(length);
};

diamond(7);