/**
 * 采用分治法寻找最长公共前缀
 * 将字符串数组的每个字符串进行不断二分，转换为两个字符串找公共前缀
 * 然后将这些前缀汇总进行比较，最后返回一个公共前缀
 * Note: 可能会超时，或者因为递归深度太深而溢出
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0)
        return ''
    else
        return myLongestCommonPrefix(strs, 0, strs.length - 1)
}

/**
 * 进行分治，不断返回两个字符串的最长公共前缀
 * @param strs
 * @param start
 * @param end
 */
function myLongestCommonPrefix(strs, start, end) {
    if (start === end) { // 如果只有一个词，则返回这个词
        return strs[start]
    } else {
        let mid = Math.floor((end - start) / 2) + start // 切分点
        let left = myLongestCommonPrefix(strs, start, mid)
        let right = myLongestCommonPrefix(strs, mid + 1, end)
        return commonPrefix(left, right)
    }
}

/**
 * 找出公共前缀
 * @param {string} a
 * @param {string} b
 */
function commonPrefix(a, b) {
    let commonPrefix = []
    let len = Math.min(a.length, b.length)
    for (let i = 0; i < len; i++) {
        if (a[i] !== b[i]) {
            return commonPrefix.join('')
        } else {
            commonPrefix.push(a[i])
        }
    }
    return commonPrefix.join('')
}

var strs = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(strs))
strs = ['ab', 'a']
console.log(longestCommonPrefix(strs))
strs = ['a']
console.log(longestCommonPrefix(strs))
strs = ["dog", "racecar", "car"]
console.log(longestCommonPrefix(strs))

