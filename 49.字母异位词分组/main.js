/**
 * 排序法
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map()
    for (let str of strs) {
        let array = str.split('')
        array.sort()
        let key = array.join('')
        let src_value = map.get(key) ? [...map.get(key), str] : [str]
        map.set(key, src_value)
    }
    return Array.from(map.values())
}

strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
console.log(groupAnagrams(strs))
