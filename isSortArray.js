function isSortedArray(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i + 1] < arr[i]) return false
    }
    return true;
}