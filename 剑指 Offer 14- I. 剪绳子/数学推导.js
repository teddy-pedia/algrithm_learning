/**
 * 根据数学推导，可知当绳子均分长为3的时候最优
 * 如果最后一段不足3，则有0，1，2三种情况
 * 如果最后一段长为2，则保留，即切分为3,3,3,...,3,2
 * 如果最后一段长为1，则把倒数第二段的3分和最后一段的1分为2，2
 * 即 3,3,3,...,3,2,2，因为 3 * 1 < 2 * 2
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    // 如果绳子长小等于3，则切分为一段1，另一段n-1
    if (n <= 3) {
        let a = 1,
            b = n - a
        return a * b
    }
    // 将绳子切分为m个长为3，一个长为remain = n - 3 * m段
    let m = Math.floor(n / 3),
        remain = n - m * 3
    if (remain === 1) {
        // 将remain和倒数第二段组成2，2段
        return Math.pow(3, m - 1) * Math.pow(2, 2)
    } else if (remain === 2) {
        // 2的情况
        return Math.pow(3, m) * remain
    } else {
        // 1的情况
        return Math.pow(3, m)
    }
}

n = 120
console.log(cuttingRope(n))
