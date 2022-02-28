/**
 * 快速幂
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    // 递归出口
    if (n === 0) return 1
    // n小于0，特殊情况
    if (n < 0) return 1 / myPow(x, -n)
    // 判断最后一位是否是1，如果是1则乘以x
    if (n & 1) return x * myPow(x * x, n >>> 1)
    return myPow(x * x, n >>> 1)
}

let x = 2.0,
    n = 3
console.log(myPow(x, n))
