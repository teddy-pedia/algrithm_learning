/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack1 = [] // 保存所有元素
    this.stack2 = [] // 辅助栈，保存非严格降序元素
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack1.push(x)
    // 如果辅助栈为空，或者x >= 辅助栈顶元素，则x入栈辅助栈
    if (!this.stack2.length || this.stack2[this.stack2.length - 1] >= x) {
        this.stack2.push(x)
    }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack1.length) {
        // 判断是否辅助栈需要出栈，即两个栈栈顶元素相同
        if (
            this.stack2.length &&
            this.stack2[this.stack2.length - 1] ===
                this.stack1[this.stack1.length - 1]
        ) {
            this.stack2.pop()
        }
        return this.stack1.pop()
    }
    return undefined
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack1[this.stack1.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.stack2[this.stack2.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

const minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
// minStack.min()
// minStack.pop()
// minStack.top()
// minStack.min()
console.log(minStack.min())
