function isElementsEqual(array) {
    var isEqual = true;
    for (var index = 1; index < array.length; index++) {
        var element = array[index];
        if (array[index] != array[0]) {
            isEqual = false;
            break;
        }
    }
    console.log(isEqual);
}
isElementsEqual([1,1,1,1,1,1,1]);
isElementsEqual([1,1,1,1,1,9,1]);