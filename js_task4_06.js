function camelCasing(string) {
    var a = string.split(" ");
    var b = "";
    for (var i = 0; i < a.length; i++) {
        a[i] = a[i].charAt(0).toUpperCase()+a[i].slice(1);
            b = b + a[i];
    }
    return b;
}
   
console.log(camelCasing("ryazan is my city"));
console.log(camelCasing("Ryazan Is My City"));