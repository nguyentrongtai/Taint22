function countZeroDigit(a, b) {
    var string = '';
    for (let i = a; i <= b; i++) string += i;
    let length = string.split("0").length;
    if (length == 0) return 0;
    else return length - 1
}