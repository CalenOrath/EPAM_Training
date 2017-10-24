function stringReverse(string) {
    var str = "";
    for (var i = string.length-1; i >= 0; i--) {
        str = str + string[i];
    }
   return str;  
}

console.log(stringReverse("Вор в лесу сел в ров"));
console.log(stringReverse("А роза упала на лапу Азора"));
console.log(stringReverse("1234567890"));