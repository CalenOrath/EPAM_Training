function symbolCounter(string) {
    var count = {};
    var a = "";
    for (var i = 0; i < string.length; i++) {
        if (count[string[i]] == undefined) {
            count[string[i]] = 1;
        } else {
            count[string[i]]++;
        }
    }
    for (var key in count) {
        a = a + key + ":" + count[key] + ", ";  
    }
    return a;
}

console.log(symbolCounter("abracadabra"));