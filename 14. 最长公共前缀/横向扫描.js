/**
 * 思路：
 * 两两比较，找出最长的公共前缀，然后这个公共前缀和下一个词比较
 * 只要公共前缀不为空，且没有到最后一个词，就继续比较，否则停止，并返回前缀
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonPrefix = ''
    let count = strs.length
    let prefixPerTime = strs[0]
    for (let i = 1; i < count; i++) {
        let a = prefixPerTime
        let b = strs[i]
        prefixPerTime = findCommonPrefix(a, b)
        if (prefixPerTime.length === 0) {
            return ''
        }
    }
    commonPrefix = prefixPerTime
    return commonPrefix
}

/**
 * 找出公共前缀
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function findCommonPrefix(a, b) {
    let len = Math.min(a.length, b.length)
    let subStr = a.substring(0, len)
    for (let i = 0; i < len; i++) {
        if (a[i] !== b[i]) {
            return a.substr(0, i)
        }
    }
    return subStr.substring(0, len)
}
