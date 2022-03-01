/**
 * 拼接两个字符串s，形成新的字符串double，需要旋转的起始索引为n = k % len
 * 所以旋转后的字符串为 double.slice(n , n + len)
 * 例如 s = abcde, k = 2, 旋转后要得到cdeab
 * 我们可以得到len = 5, n = k % len = 2
 * double = abcdeabcde
 * 而起始索引为2，切割len长度的字符串，即得到了cdeab
 *
 * @param {string} s
 * @param {number} k
 * @returns
 */
const reverseLeftWords = (s, k) => {
    const len = s.length
    const n = k % len
    const double = `${s}${s}`
    return double.slice(n, n + len)
}
