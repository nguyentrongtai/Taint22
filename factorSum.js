function factorSum(n) {
    let i = 2;
    let sum = 0;;
    while (n != 1) {
        if (isPrime(i) && n % i === 0) {
            sum += i;
            n /= i;
            i = 1;
        }
        i++;
    }
    if (isPrime(sum)) {
        return sum;
    }
    return factorSum(sum);

}