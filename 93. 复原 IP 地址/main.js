/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let res = []
    const dfs = (subStr, index, path) => {
        if (index === 4) {
            if (subStr.length > 1 && subStr[0] === '0') return
            let addr = parseInt(subStr)
            if (addr <= 255) {
                res.push([...path, addr].join('.'))
            }
            return
        }
        // 取subStr的前1、2、3个字符做为当前的addr，判断是否需要继续递归
        for (let i = 0; i < 3; i++) {
            let sub = subStr.substring(0, i + 1)
            // 如果sub长度大于1，且起始字符时0则返回
            if (sub.length > 1 && sub[0] === '0') return
            let curAddr = parseInt(sub)
            // 如果当前addr不在[0, 255]范围，则直接回溯
            if (curAddr > 255) break
            dfs(subStr.substring(i + 1), index + 1, [...path, curAddr])
        }
    }
    dfs(s, 1, [])
    console.log(res)
    return res
}

s = '25525511135'
s = '101023'
s = '0000'
restoreIpAddresses(s)
