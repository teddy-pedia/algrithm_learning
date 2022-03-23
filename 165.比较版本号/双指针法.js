/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
    let res = 0
    let i = 0,
        k = 0,
        n = version1.length,
        m = version2.length
    while (i < n || k < m) {
        let x = 0
        for (; i < n && version1[i] !== '.'; i++) {
            x = x * 10 + parseInt(version1[i])
        }
        i++ // 跳过.
        let y = 0
        for (; k < m && version2[k] !== '.'; k++) {
            y = y * 10 + parseInt(version2[k])
        }
        k++
        if (x !== y) {
            return x > y ? 1 : -1
        }
    }
    return res
}

console.log(compareVersion('1.01', '1.001'))
console.log(compareVersion('1.0', '1.0.0'))
console.log(compareVersion('0.1', '1.1'))
console.log(compareVersion('1.0.1', '1'))
console.log(compareVersion('7.5.2.4', '7.5.3'))
