/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    const map = new Map()
    let res = ''
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (!map.has(c)) {
            map.set(c, 1)
        } else {
            map.set(c, map.get(c) + 1)
        }
    }
    for (let key of map.keys()) {
        if (map.get(key) === 1) {
            res = key
            break
        }
    }
    return res
}

// test
s = 'leetcode'
console.log(firstUniqChar(s))
