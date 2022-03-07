/**
 * 求两个整数之和，要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
    // a表示非进位，b表示进位
    while (b !== 0) {
        let c = (a & b) << 1 // c为进位
        a = a ^ b
        b = c
    }
    return a
}

console.log(add(1, -2))
