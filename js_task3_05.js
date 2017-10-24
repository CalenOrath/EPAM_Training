// Написать функцию, которая принимает объект и создает его копию (новую ссылку) и возвращает скопированный объект
function cloneObject(object) {
    var objectClone = {};
    for (var key in object) {
            var element = object[key];
            objectClone[key] = element;
    }
    return objectClone;
}

var actress = {};
actress.name = "Mary-Kate";
actress.lastname = "Olsen";
actress.age = 31;

var actressClone = cloneObject(actress);
console.log(actressClone);
console.log(actressClone == actress);
