// #1
function stringEverCapitalize(string) {
    var obj = new String(string);
    var a = "";
    for (var key in obj) {
        if (key == 0 || string[key-1] == " ") {
            a = a + obj[key].toUpperCase();
        } else {
            a = a + obj[key];
        }
    }
return a;
}

console.log(stringEverCapitalize("ryazan is my city"));

// #2 \almost the same
function strEverCapitalize(string) {
    var a = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i-1] === " " || i === 0) {
            a = a + string.charAt(i).toUpperCase();
        } else {
            a = a + string.charAt(i);
        } 
    }
    return a;
   }
   
   console.log(strEverCapitalize("ryazan is my city"));

// #3
function strEverCap(string) {
    var a = string.split(" ");
    var b = "";
    for (var i = 0; i < a.length; i++) {
        a[i] = a[i].charAt(0).toUpperCase()+a[i].slice(1);
        if (i == 0) {
            b = b + a[i];
        } else {
            b = b + " " + a[i];
        }
    }
    return b;
}

console.log(strEverCap("ryazan is my city"));