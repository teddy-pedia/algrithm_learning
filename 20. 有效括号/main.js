/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//     if (s.length % 2 !== 0) return false
//     // 用数组模拟栈
//     const stack = []
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
//             stack.push(s[i])
//         } else if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
//             let left = stack.pop()
//             if (
//                 !(
//                     (left === '(' && s[i] === ')') ||
//                     (left === '[' && s[i] === ']') ||
//                     (left === '{' && s[i] === '}')
//                 )
//             ) {
//                 return false
//             }
//         }
//     }
//     if (stack.length !== 0) return false
//     return true
// }

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) {
        return false
    }
    const stack = [],
        map = new Map([
            ['(', ')'],
            ['[', ']'],
            ['{', '}'],
        ])
    for (let x of s) {
        if (map.has(x)) {
            stack.push(x)
        } else {
            let left = stack.pop()
            if (map.get(left) !== x) {
                return false
            }
        }
    }
    return stack.length === 0
}

console.log(isValid('()'))
console.log(isValid('(){}[]'))
console.log(isValid('({})'))
console.log(isValid('([})'))
console.log(isValid('(('))
