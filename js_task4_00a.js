var river = {
    name: "Lena",
    place: "Syberia",
    length: 4400
};
var influx = Object.create(river);
influx.name = "Aldan";
influx.length = 2273;

function findPropInProto(obj, prop) {
    return Object.getPrototypeOf(obj)[prop];
}

console.log(findPropInProto(influx, "name"));
console.log(findPropInProto(influx, "volume"));
console.log(delete river["name"]);