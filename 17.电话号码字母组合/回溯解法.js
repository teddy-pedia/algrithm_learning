/**
 * 回溯
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits.length) return []
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    let res = []
    const dfs = (curStr, i) => {
        if (i > digits.length - 1) {
            res.push(curStr)
            return
        }
        const letters = map[digits[i]]
        for (const letter of letters) {
            dfs(curStr.concat(letter), i + 1)
        }
    }
    dfs('', 0)
    return res
}
