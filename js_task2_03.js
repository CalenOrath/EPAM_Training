function arrayOddEvenCount(array) {
    var countOdd = 0;
    var countEven = 0;
    var countZeros = 0;
    for (var index = 0; index < array.length; index++) {
        if (array[index] % 2 == 0 && array[index] != 0) {
            countEven++;
        } else if (array[index] % 2 == 1) {
            countOdd++;
        } else if (array[index] == 0) {
            countZeros++;
        }
    }
    if (countZeros == 0) {
        console.log("Четных: " + countEven + ", Нечетных: " + countOdd + ";");
    } else {
        console.log("Четных: " + countEven + ", Нечетных: " + countOdd + ", Нулей: " + countZeros + ";"); 
    }
}

arrayOddEvenCount([2,3,5,6,7,3]);
arrayOddEvenCount([2,3,5,6,7,3,0]);