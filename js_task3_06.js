// Написать функцию, которая делает глубокую копию (deep clone) объекта.
// Глубокая копия, значит, что если одно из свойств содержит объект оно также должно быть скопировано,
// чтобы создалась новая ссылка на соответствующий объект. Глубина вложенности может быть бесконечной,
// поэтому надо использовать рекурсию.
function deepCloneObject (object) {
    var objectClone = {};
    for (var key in object) {
        if (typeof object[key] === "object") {
            var element = deepCloneObject (object[key]);
        } else {
            var element = object[key];
        }
        objectClone[key] = element;
    }
    return objectClone;
}

var citizen = {};
    citizen.name = "Valera";
    citizen.child = {};
        citizen.child.name = "Victor";
        citizen.child.age = 37;
        citizen.child.profession = "businessman";
        citizen.child.child = {};
            citizen.child.child.name = "Valentin";
            citizen.child.child.age = 19;
            citizen.child.child.job = "drug mule";
            citizen.child.child.relations = "think that grandpa is cool";
    citizen.hobbies = ["Art", "Cycling", "Canabis Planting"];
    citizen.age = 56;

var citizenClone = deepCloneObject(citizen);
console.log(citizenClone.child.child.job);
console.log(citizenClone.child.child.name === citizen.child.child.name);
