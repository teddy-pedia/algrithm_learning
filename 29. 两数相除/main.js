var divide = function (a, b) {
    const INT_MIN = -Math.pow(2, 31)
    const INT_MAX = Math.pow(2, 31) - 1

    if (a === INT_MIN && b === -1) return INT_MAX

    const sign = (a > 0) ^ (b > 0) ? -1 : 1
    a = Math.abs(a)
    b = Math.abs(b)

    let res = 0
    for (let x = 31; x >= 0; x--) {
        if ((a >>> x) - b >= 0) {
            a = a - (b << x)
            res = res + (1 << x)
        }
    }
    if (res === -2147483648) return -2147483648
    // bug 修复：因为不能使用乘号，所以将乘号换成三目运算符
    return sign === 1 ? res : -res
}

console.log(divide(10, 3))
console.log(divide(7, -3))
console.log(divide(-2147483648, 2))
