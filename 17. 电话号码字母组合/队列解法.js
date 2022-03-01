/**
 * 队列
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
    let res = [''] // 至少要有一个元素
    let n = digits.length
    for (let i = 0; i < n; i++) {
        let c = digits[i]
        let len = res.length,
            k = 0
        const arr = map[c].split('')
        while (k < len) {
            let temp = res.shift()
            let newArr = arr.map((str) => temp.concat(str))
            res.push(...newArr)
            k++
        }
    }
    return res
}
