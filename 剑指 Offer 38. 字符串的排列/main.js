/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    let res = []
    const set = new Set() // 去重
    // 把s变为字符数组
    let strArr = [].slice.call(s)
    const recur = (arr, path) => {
        if (arr.length === 0) {
            let str = path.join('')
            if (!set.has(str)) {
                set.add(str)
                res.push(str)
            }
            return
        }
        for (let i = 0; i < arr.length; i++) {
            let curPath = [...path, arr[i]]
            let curArr = [...arr.slice(0, i), ...arr.slice(i + 1)]
            recur(curArr, curPath)
        }
    }
    recur(strArr, [])
    console.log(res)
    return res
}

s = 'abc'
permutation(s)
