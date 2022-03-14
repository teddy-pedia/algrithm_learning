/**
 * 设立一个栈来模拟入栈过程，然后循环判断栈顶元素是否等于出栈序列当前元素
 * 如果是，则进行出栈。
 * 例如
 * 入栈 1 -> 2 -> 3 -> 4 -> 5
 * 出栈 4 -> 5 -> 3 -> 2 -> 1
 * 当入栈到4的时候，发现等于出栈序列当前元素，则出栈，并且出栈序列指针移到下一个位置(5)
 * 入栈元素5为栈顶元素，等于出栈序列的当前元素5，则出栈
 * ...
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    if (pushed.length === 0) return true
    const stack = []
    let k = 0
    for (let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i])
        // 遍历是否需要出栈
        while (stack.length > 0 && stack[stack.length - 1] === popped[k]) {
            k++
            stack.pop()
        }
    }
    return stack.length === 0
}

// test
;(pushed = [1, 2, 3, 4, 5]), (popped = [4, 3, 5, 1, 2])
console.log(validateStackSequences(pushed, popped))
