// #1
function stringCapitalize(string) {
    var obj = new String(string);
    var a = "";
    for (var key in obj) {
        if (key == 0) {
            a = obj[key].toUpperCase();
        } else {
            a = a + obj[key];
        }
    }
return a;
}

console.log(stringCapitalize("ryazan"));

// #2
function strCapitalize(string) {
 return string.charAt(0).toUpperCase()+string.slice(1);
}

console.log(strCapitalize("ryazan"));
