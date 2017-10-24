function arrayInfo(array) {
    for (var index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
    console.log("Число элементов: " + array.length);
}

arrayInfo([3, 5, 6, 7, 3]);