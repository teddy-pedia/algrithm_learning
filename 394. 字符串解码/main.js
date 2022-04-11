/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const stack = []
    for (let c of s) {
        if (c !== ']') {
            stack.push(c)
            continue
        }
        // 此时遇到了]，需要出栈直到[停止
        let cur = stack.pop()
        let temp = ''
        while (cur !== '[') {
            // 当前的cur是[...]中的字符，加入到temp中
            temp = cur + temp
            cur = stack.pop()
        }
        // 此时cur === '['，再之前则需要获取数字
        let num = ''
        cur = stack.pop()
        while (!Number.isNaN(Number(cur))) {
            // 此时是数字
            num = cur + num
            cur = stack.pop()
        }
        // 此时cur不是数字了，需要重新入栈
        stack.push(cur)
        // 将temp重复num次，并入栈
        stack.push(temp.repeat(Number(num)))
    }
    // 循环结束后，栈了的元素调用join('')即是返回的字符串
    return stack.join('')
}

let s = '3[a2[c]]'
console.log(decodeString(s))
