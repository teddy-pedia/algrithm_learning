/**
 * 快速幂
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (x === 0) return 0
    let res = 1,
        b = n
    // 如果b<0，则特殊处理，x取倒数
    if (b < 0) {
        x = 1 / x
        b = -b
    }
    while (b > 0) {
        // 如果二进制最后一位是1，则res乘以x，否则res都乘以1
        if (b & 1) {
            res *= x
        }
        // 二进制位向右移动1位
        b = b >>> 1
        x *= x
    }
    return res
}

let x = 2.0,
    n = -2147483648
console.log(myPow(x, n))
