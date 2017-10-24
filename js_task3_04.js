function isPropIn (property, object) {
    if (property in object) {
        console.log("Такое свойство у объекта уже есть");
    } else {
        object[property] = "new";
        console.log("Такого свойства у объекта не нашлось. Но теперь оно есть");
    }
    return (object);
}

var iAm = {};
iAm.name = "Dima";
iAm.age = 27;
iAm.isAlive = true;

console.log(isPropIn("name", iAm));
console.log(isPropIn("lastName", iAm));