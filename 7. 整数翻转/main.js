/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

 如果反转后整数超过 32 位的有符号整数的范围 [−2^31, 2^31− 1] ，就返回 0。

 假设环境不允许存储 64 位整数（有符号或无符号）。
 *
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    let res = 0
    while (x !== 0) {
        let tmp = x % 10
        res = res * 10 + tmp
        // if (x < 0)
        //     x = Math.ceil(x / 10)
        // else
        //     x = Math.floor(x / 10)
        x = ~~(x / 10)
        // x = (x / 10) | 0
        console.log(x)
    }
    if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1)
        return 0
    return res
};
console.log(reverse(-321))

console.log((-3.2) | 0)
