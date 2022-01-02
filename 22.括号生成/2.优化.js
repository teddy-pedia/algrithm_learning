/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    const res = []
    const depth = 2 * n
    const dfs = (left, right, str) => {
        if (str.length === depth) {
            res.push(str)
            return
        }
        // 当剩余右括号比左括号多时，才能用右括号，否则会非法
        if (right > left) {
            dfs(left, right - 1, str.concat(')'))
        }
        // 当剩余左括号大于0时，都可以用左括号，即((((也不能直接认为非法
        if (left > 0) {
            dfs(left - 1, right, str.concat('('))
        }
    }
    dfs(n, n, '')
    return res
}

let ans = generateParenthesis(3)
console.log(ans)
