/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    const res = [],
        arr = ['(', ')']
    const depth = 2 * n
    const dfs = (cur, i) => {
        if (i === depth) {
            res.push(cur)
            return
        }
        for (let letter of arr) {
            dfs(cur.concat(letter), i + 1)
        }
    }
    dfs('(', 1)
    const finalRes = []
    // 判断括号合法性
    for (let str of res) {
        let flag = isValid(str)
        if (flag) {
            finalRes.push(str)
        }
    }
    return finalRes
}

const isValid = (str) => {
    const stack = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(str[i])
        } else if (str[i] === ')') {
            let temp = stack.pop()
            if (temp !== '(') {
                return false
            }
        }
    }
    return stack.length === 0 ? true : false
}

let ans = generateParenthesis(3)
console.log(ans)
