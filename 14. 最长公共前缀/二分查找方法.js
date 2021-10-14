/**
 * 采用二分法找到最长公共前缀
 * 1. 首先确定所有字符串的最小长度minLen
 * 2. 在0~minLen区间上二分查找，如果0~mid相同，则前缀在mid右边，反之在左
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs == null || strs.length === 0) {
        return ''
    }
    if (strs.length === 1) return strs[0]
    let minLen = strs[0].length
    for (let str of strs) {
        minLen = Math.min(str.length, minLen)
    }
    // 进行二分查找
    let low = 0,
        high = minLen - 1
    while (low <= high) {
        let mid = Math.floor((high - low) / 2) + low
        if (isEqual(strs, low, mid)) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return strs[0].substring(0, low)
}

/**
 * 判断字符数组中所有字符是否相同
 * @param {string[]} strs
 * @param {number} low
 * @param {number} high
 * @return {boolean}
 */
function isEqual(strs, low, high) {
    let prefix = strs[0].substring(low, high + 1)
    for (let i = 1; i < strs.length; i++) {
        if (prefix !== strs[i].substring(low, high + 1)) {
            return false
        }
    }
    return true
}

let strs = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(strs))
strs = ['ab', 'a']
console.log(longestCommonPrefix(strs))
strs = ['a']
console.log(longestCommonPrefix(strs))
strs = ["dog", "racecar", "car"]
console.log(longestCommonPrefix(strs))
