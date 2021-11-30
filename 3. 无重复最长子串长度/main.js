/**
 * 暴力求解
 * 对每个字符作为起始字符，找出其最长子串
 * 遍历结束后，返回最长子串长度
 * @param {string} s
 * @return {number}
 */
/*var lengthOfLongestSubstring = function (s) {
    let set = new Set()
    let maxLen = 0
    for (let i = 0; i < s.length; i++) {
        let k = i
        let currentLen = 0
        // 找到s[i]的最长子串
        while (k < s.length && !set.has(s[k])) {
            set.add(s[k])
            k++
            currentLen++
        }
        maxLen = Math.max(currentLen, maxLen)
        set.clear()
    }
    return maxLen
}*/

/**
 * 滑动窗口
 * 当窗口第一次出现重复字符的时候，将窗口左边往右滑动，恰好没有重复字符停止
 * 例如: (abca)bcbb 当a重复了，那么窗口左边往右滑动 a(bca)bcbb，此时窗口右边又可以继续往右滑动
 * 可以通过一个map来记录 <字符: 当重复时移动，left指针移动到下一个位置的索引>
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    if (s.length <= 1)
        return s.length
    let maxLen = 0
    const map = new Map()
    let left = 0, right = 0
    while(right < s.length) {   // 右指针滑动到最后一个字符就停止
        let c = s[right]    // 当前字符
        // 获取当前字符的索引，如果不存在则返回0，更新left，且left只能往右滑动
        left = Math.max(left, map.get(c) ?? 0)
        maxLen = Math.max(maxLen, right - left + 1) // 更新maxLen
        map.set(c, ++right)
    }
    return maxLen
}

console.log(lengthOfLongestSubstring(''))
console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('abba'))
