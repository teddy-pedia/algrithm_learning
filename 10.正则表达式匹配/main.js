/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
    const m = s.length,
        n = p.length
    // 构建二维数组，形状为(m+1)*(n+1)
    const dp = new Array(m + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n + 1).fill(false)
    }
    // 当s为空串时
    dp[0][0] = true
    for (let j = 2; j <= n; j++) {
        /*
            p不为空，则必然右边需要有*才能匹配，比如p = a*b*c*
            那么dp[0][j] = dp[0][j-2]
        */
        if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2]
    }
    // s不为空的时候
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
                // 单字符匹配上的时候，dp[i][j] = dp[i-1][j-1]
                dp[i][j] = dp[i - 1][j - 1]
            } else if (p[j - 1] === '*') {
                /*
                    当单字符不匹配又恰好是*的时候，则需要把*之前的字符进行比较
                    *字符可以使之前的字符p[j-2]复制0次，1次或者 >= 2次
                */
                if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
                    /*
                        dp[i][j-2]表示一个都没匹配上，即复制了0次
                        dp[i-1][j-2]表示匹配上1个，即复制了1次
                        dp[i-1][j]表示匹配上多于一个，即复制了2次
                   */
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j]
                } else {
                    // s = 'a', p = 'b*'的情况，即‘b*’匹配0个
                    dp[i][j] = dp[i][j - 2]
                }
            }
        }
    }
    return dp[m][n]
}

console.log(isMatch('aa', 'a'))
console.log(isMatch('aa', 'a*'))
console.log(isMatch('ab', '.*'))
console.log(isMatch('aab', 'c*a*b*'))
console.log(isMatch('mississippi', 'mis*is*p*'))
