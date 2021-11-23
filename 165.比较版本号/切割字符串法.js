/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
    let res = 0
    let ver1 = toNumbers(version1)
    let ver2 = toNumbers(version2)
    let len = Math.max(ver1.length, ver2.length)
    for (let i = 0; i < len; i++) {
        let a = ver1[i] || 0
        let b = ver2[i] || 0
        if(a > b) return 1
        else if(a < b) return -1
    }
    return res
};

/**
 * 将版本号转为数字的数组，并去除掉前导0
 * @param {string} version
 * @return {number[]} res
 */
function toNumbers(version) {
    let res = []
    let arr = version.split('.')
    for (let str of arr) {
        let temp = str
        while (temp.length > 1 && temp.startsWith('0')) {
            temp = temp.substring(1)
        }
        res.push(parseInt(temp))
    }
    return res
}

console.log(compareVersion('1.01', '1.001'))
console.log(compareVersion('1.0', '1.0.0'))
console.log(compareVersion('0.1', '1.1'))
console.log(compareVersion('1.0.1', '1'))
console.log(compareVersion('7.5.2.4', '7.5.3'))
