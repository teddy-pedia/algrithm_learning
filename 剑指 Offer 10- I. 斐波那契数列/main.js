var fib = function (n) {
    if (n < 2) return n
    const m = Math.pow(10, 9) + 7
    let a = 0,
        b = 1,
        res = 1
    for (let i = 2; i < n; i++) {
        a = b
        b = res
        res = (a + b) % m
    }
    return res
}
