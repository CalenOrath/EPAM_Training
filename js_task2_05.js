function arrayMaxElement(array) {
    var maxElement = array[0];
    for (var index = 1; index < array.length; index++) {
        var element = array[index];
        if (array[index] > maxElement) {
            maxElement = array[index];
        }
    }
    console.log("Максиальное значение элемента в массиве: " + maxElement);
}

arrayMaxElement([-2,1,3,4,5,3,6,8,54,3,0]);