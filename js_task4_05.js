function truncate(string, num) {
    if (string.length > num && num > 3) {
        return string.slice(0, num-3)+"...";
    } else {
        return "...";
    }
}

console.log(truncate("asdfgddg", 5));
console.log(truncate("asdfgddg", 2));