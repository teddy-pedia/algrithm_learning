/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let res = []
    const dfs = (str, arr) => {
        if (str.length === 1) {
            res.push([...arr, str])
            return
        }
        if (str.length === 0) {
            // 此时为空，不要把空串推入数组
            res.push(arr)
            return
        }
        for (let i = 0; i < str.length; i++) {
            let cut = str.substring(0, i + 1)
            let subStr = str.substring(i + 1)
            // 判断是否是回文
            if (isPalindrome(cut)) {
                // 是回文，调用dfs继续往下
                dfs(subStr, [...arr, cut])
            }
        }
    }
    dfs(s, [])
    // console.log(res)
    return res
}

function isPalindrome(str) {
    if (str.length === 1) return true
    let left = 0,
        right = str.length - 1
    while (left <= right) {
        if (str[left] !== str[right]) {
            return false
        } else {
            left++
            right--
        }
    }
    return true
}

partition('aabbcde')
partition('bb')
