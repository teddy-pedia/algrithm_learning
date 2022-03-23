/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length
    const map = new Map()
    let left = 0,
        right = 0,
        res = 0
    while (right < s.length) {
        let c = s[right]
        if (map.has(c)) {
            res = Math.max(res, right - left)
            left = Math.max(left, map.get(c))
            map.delete(c)
        }
        map.set(c, ++right)
    }
    res = Math.max(res, right - left)
    return res
}

let s = 'au'
console.log(lengthOfLongestSubstring(s))
