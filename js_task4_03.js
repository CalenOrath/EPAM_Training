// #1
function strInString(string, str) {
     if (string.indexOf(str) != -1) {
        return true;
     }
     return false;
}

console.log(strInString("I love cats", "cats"));

// #2
function stringInString (string, str) {
    var result = false;
    for (var j = 0; j < string.length; j++) {
        if (string[j] == str[0]) {
            for (var i = 0; i < str.length; i++) {
                if (string[j+i] == str[i]) {
                    result = true;
                } else {
                    result = false;
                    break;
                }
            }
        }
    }
    return result;
}

console.log(stringInString("I love cats", "cats"));