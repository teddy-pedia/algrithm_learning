/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    let res = []
    const recur = (arr, curIndex) => {
        if (curIndex > n) {
            // 去掉前导0
            let item = arr.shift()
            while (item === 0) item = arr.shift()
            arr.unshift(item)
            res.push(parseInt(arr.join('')))
            return
        }
        for (let i = 0; i <= 9; i++) {
            recur([...arr, i], curIndex + 1)
        }
    }
    recur([], 1)
    res.shift() // 去掉最开始的0
    return res
}

printNumbers(3)
