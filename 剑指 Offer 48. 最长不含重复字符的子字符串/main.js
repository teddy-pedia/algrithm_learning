/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length < 2) return s.length
    // map用于存放left指针会移动到的位置
    const map = new Map()
    let left = 0,
        right = 0,
        res = 0
    while (right < s.length) {
        // 如果map中没有该字符，则添加该字符为key, 该字符的下一个位置为value
        if (!map.has(s[right])) {
            map.set(s[right], right + 1)
            right++
        } else {
            // 更新res
            res = Math.max(res, right - left)
            // 如果有，则说明元素重复，left指针为该字符在map中的value值
            // 并删除该键值对
            // 需要注意的是，left应该只能向右滑动
            left = Math.max(left, map.get(s[right]))
            map.delete(s[right])
        }
    }
    // 此时right指针指向了s.length，需要多判断一次
    res = Math.max(res, right - left)
    console.log(res)
    return res
}

// test
s = 'abcabcbb'
s = 'bbbbb'
s = 'abba'
lengthOfLongestSubstring(s)
