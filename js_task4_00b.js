function createObject () {
    return Object.create(null);
}
console.log(createObject().__proto__);