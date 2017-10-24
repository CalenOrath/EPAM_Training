function whatType(arg) {
    if (typeof(arg) == "string") {
        console.log('\"'+arg+ '\"' + " - это строка");
    } else if (typeof(arg) == "number") {
        console.log(arg + " - это число");
    } else {
        console.log(arg + " - это не строка и не число");
    }
}

whatType(1);
whatType("1");
whatType("Cтрока случайного содеражания");
whatType(true);