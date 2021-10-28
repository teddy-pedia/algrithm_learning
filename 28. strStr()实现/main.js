/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function (haystack, needle) {
//     let needle_len = needle.length
//     if (needle_len === 0) return 0
//     let res = -1
//     for (let i = 0; i < haystack.length; i++) {
//         // 如果第一个字符匹配上，则判断接下来的几个字符是不是相同
//         if (haystack[i] === needle[0]) {
//             if (haystack.substring(i, i + needle_len) === needle) {
//                 res = i
//                 break
//             }
//         }
//     }
//     return res
// }

/**
 * KMP算法实现
 * @param {string} s 主串
 * @param {string} pattern 模式串
 */
const strStr = (s, pattern) => {
    const n = s.length,
        m = pattern.length
    if (m === 0) return 0 // c语言的结果
    const next = getNext(pattern)
    // console.log(next)
    // 执行Kmp匹配过程
    for (let i = 0, j = 0; i < n; i++) {
        // 出现了某个字符不匹配的情况，需要j进行回溯
        while (j > 0 && s[i] !== pattern[j]) {
            j = next[j - 1]
        }
        // 匹配成功，此时j++，循环结束后i++
        if (s[i] === pattern[j]) {
            j++
        }
        if (j === m) {
            // 匹配成功
            return i - j + 1
        }
    }
    return -1
}

/**
 * 构建next数组
 * @param {string} pattern 模式串
 */
const getNext = (pattern) => {
    let i = 1,
        j = 0,
        m = pattern.length
    const next = new Array(m).fill(0)
    while (i < m) {
        // 未匹配成功，j进行回溯，若回溯到j=0则表示不存在这样的真前缀
        // 回溯取j=next[j-1]一步步向前试探
        while (j > 0 && pattern[i] !== pattern[j]) {
            j = next[j - 1]
        }
        // 如果匹配上，则 next[i] = j+1, 且i和j后移
        if (pattern[i] === pattern[j]) {
            next[i++] = ++j
            // 如果j为0，则表示没真前缀，此时next[i] = j, i和j后移
        } else if (j === 0) {
            next[i++] = j
        }
    }
    return next
}

// test
console.log(strStr('hello', 'll'))
console.log(strStr('aaaaa', 'bba'))
console.log(strStr('abbababababab', 'aabaaab'))
console.log(strStr('a', ''))
console.log(strStr('a', 'a'))
console.log('', '')
