// #1
function sumRounded(a, b) {
    var c = a + b;
    return Number(c.toPrecision(4));
}

console.log(sumRounded(2.3546, 5.332255));

// #2
function sumRound (a, b) {
    var c = (a + b)*1000;
    return Math.round(c)/1000;
}

console.log(sumRound(2.3546, 5.332255));