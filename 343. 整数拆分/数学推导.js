/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
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
