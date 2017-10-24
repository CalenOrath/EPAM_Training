// #1
function stringSpaceDel(string) {
    return string.trim();
}

// #2
function stringSpaceDelete(string) {
    var a = "";
    var obj = new String(string) 
    for (var key in obj) {
        if (obj[key] == " " && (key == 0 || key == obj.length-1)) {
        } else {
            a = a + obj[key];
        }
    }
    return a;
}

console.log(stringSpaceDel(" a b c "));
console.log(stringSpaceDelete(" a b c "));

