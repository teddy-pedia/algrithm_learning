/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (s.length === 0 || s.length < t.length) return ''
    let left = 0,
        right = 0,
        minLen = Number.MAX_SAFE_INTEGER,
        needCoount = t.length
    res = ''
    const need = {}
    for (let str of t) {
        need[str] = (need[str] || 0) + 1
    }
    while (right < s.length) {
        if (need[s[right]] > 0) {
            needCoount--
        }
        need[s[right]]--
        if (!needCoount) {
            // 此时已经包含了所有的字符，移动左端去掉多余字符
            // 当移动到need[c] === 0时停止，因为再往右则子串不满足
            // 不需要判断left <= right，因为最多left就会移动到right位置而停止
            while (true) {
                if (need[s[left]] === 0) {
                    break
                }
                need[s[left]]++
                left++
            }
            // 此时可以对窗口长度进行判断，如果小于minLen则记录当前长度及子串
            if (right - left + 1 < minLen) {
                minLen = right - left + 1
                res = s.slice(left, right + 1)
            }
            // 此时left继续向右移动一位，寻找新的窗口
            need[s[left]]++
            left++
            needCoount++
        }
        right++
    }
    return res
}
let s = 'ADOBECODEBANC',
    t = 'ABC'
s = 'ab'
t = 'a'
console.log(minWindow(s, t))
