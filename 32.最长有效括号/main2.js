// const longestValidParentheses = (s) => {
//     let maxLen = 0
//     const stack = []
//     stack.push(-1)
//     for (let i = 0; i < s.length; i++) {
//         const c = s[i]
//         if (c == '(') {
//             // 左括号的索引，入栈
//             stack.push(i)
//         } else {
//             // 遍历到右括号
//             stack.pop() // 栈顶的左括号被匹配，出栈
//             if (stack.length) {
//                 // 栈未空
//                 const curMaxLen = i - stack[stack.length - 1] // 计算有效连续长度
//                 maxLen = Math.max(maxLen, curMaxLen) // 挑战最大值
//             } else {
//                 // 栈空了
//                 stack.push(i) // 入栈充当参照
//             }
//         }
//     }
//     return maxLen
// }

const longestValidParentheses = (s) => {
    if (!s.length) return 0
    let res = []
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (stack.length && s[i] === ')') {
            res.push(stack.pop())
            res.push(i)
        } else if (s[i] === '(') {
            stack.push(i)
        }
    }
    res.sort((a, b) => a - b)
    // 寻找最长的连续递增数列长度
    let ans = 0
    if (res.length <= 2) {
        ans = res.length
    } else {
        let curLen = 2
        for (let i = 1; i < res.length; i += 2) {
            if (res[i] + 1 === res[i + 1]) {
                curLen += 2
            } else {
                ans = Math.max(ans, curLen)
                curLen = 2
            }
        }
    }
    return ans
}

console.log(longestValidParentheses('(()'))
console.log(longestValidParentheses(')()())'))
console.log(longestValidParentheses(''))
