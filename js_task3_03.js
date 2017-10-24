function isStringIn (string, object) {
    return string in object;
}

var iAm = {};
iAm.name = "Dima";
iAm.age = 27;
iAm.isAlive = true;

console.log(isStringIn ("name", iAm));
console.log(isStringIn ("job", iAm));