function isSimple(number) {
    var limit = 1000;
    if (number > limit) {
        console.log ("Неверные данные. Число должно быть меньше " + limit);
    } else {
        var simple = true;
        for (var index = 2; index < number; index++) {
            if (number % index == 0) {
                simple = false;
                break;
            }
        }
        if (simple == true) {
        console.log("Число " + number + " - простое");
        } else {
        console.log("Число " + number + " - составное, делится на " + index);
        }
    }   
}

isSimple(5);
isSimple(23);
isSimple(117);
isSimple(256);
isSimple(49);
isSimple(1001);