/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.map = new Map()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        // 如果有，则取出
        const temp = this.map.get(key)
        this.map.delete(key)
        this.map.set(key, temp)
        return temp
    } else {
        return -1
    }
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        // 有的话，则先删除再更新
        this.map.delete(key)
    }
    this.map.set(key, value)
    if (this.map.size > this.capacity) {
        // 若超出范围，将map中头部的删除
        // map.keys()返回一个迭代器
        // 迭代器调用next()方法，返回包含迭代器返回的下一个值，在value中
        this.map.delete(this.map.keys().next().value)
    }
}
