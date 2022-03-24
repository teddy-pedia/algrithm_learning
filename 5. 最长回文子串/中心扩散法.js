/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length === 1) return s
    let start = 0,
        end = 0

    const centerExpand = (start, end) => {
        while (start >= 0 && end < s.length && s[start] === s[end]) {
            start--
            end++
        }
        return end - start - 1
    }

    for (let i = 0; i < s.length; i++) {
        let len1 = centerExpand(i, i)
        let len2 = centerExpand(i, i + 1)
        let maxLen = len1 > len2 ? len1 : len2
        if (maxLen > end - start + 1) {
            start = i - ((maxLen - 1) >> 1)
            end = i + (maxLen >> 1)
        }
    }
    return s.substring(start, end + 1)
}
