function compareSumOfDigits(input) {
    var sum1 = 0
    var sum2 = 0;
    let arr = []
    for (let i = 0; i < input.length; i++) {
        arr.push(parseInt(input.charAt(i)))
    }
    arr.forEach(e => {
        if (e % 2 == 0) sum1 += e
        else sum2 += e;
    })
    return sum2 - sum1;
}