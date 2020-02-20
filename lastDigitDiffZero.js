function lastDigitDiffZero(n) {
    let factor = 1;
    for (i = 1; i <= n; i++) {
        factor *= i;
    }
    while (factor % 10 == 0) {
        factor = factor / 10;
    }
    return factor % 10;
}