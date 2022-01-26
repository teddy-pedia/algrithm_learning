var CQueue = function () {
    this.stack1 = [] // 入队栈
    this.stack2 = [] // 出队栈
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.stack1.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (this.stack2.length) {
        // 如果出队栈不为空，则直接从出队栈出队
        return this.stack2.pop()
    } else {
        // 此时为空，需要先从入队栈把元素压入出队栈
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop())
        }
        if (this.stack2.length) {
            return this.stack2.pop()
        } else {
            // 此时两个栈都是空了，则返回-1
            return -1
        }
    }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
