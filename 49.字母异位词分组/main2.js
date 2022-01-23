/**
 * 计数法
 * 创建一个长度为26的数组，统计每个字符串的每个字符的次数
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map()
    for (let str of strs) {
        let array = new Array(26).fill(0)
        for (let c of str) {
            array[c.charCodeAt() - 'a'.charCodeAt()]++
        }
        let key = array.toString()
        // 将这个array作为键
        let value = map.get(key) ? [...map.get(key), str] : [str]
        map.set(key, value)
    }
    return Array.from(map.values())
}

strs = ['bdddddddddd', 'bbbbbbbbbbc']
console.log(groupAnagrams(strs))
