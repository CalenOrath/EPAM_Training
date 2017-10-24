function strInsert(string, str, pos) {
    var a = string.split(" ");
    var b = "";
    for (var i = 0; i < a.length; i++) {
        if (i == 0) {
            b = b + a[i];
        } else if (i == 5) {
            b = b + " " + a[i] + " " + str ;
        } else {
            b = b + " " + a[i];
        }
    }
    return b;
}

console.log(strInsert("А мать твоя знает, на ком гобелен?", "её", 5));