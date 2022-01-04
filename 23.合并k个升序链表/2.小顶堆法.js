class Heap {
    constructor(comparator = (a, b) => a - b, data = []) {
        this.data = data;
        this.comparator = comparator;//比较器
        this.heapify();//堆化
    }

    heapify() {
        if (this.size() < 2) return;
        for (let i = Math.floor(this.size()/2)-1; i >= 0; i--) {
            this.bubbleDown(i);//bubbleDown操作
        }
    }

    peek() {
        if (this.size() === 0) return null;
        return this.data[0];//查看堆顶
    }

    offer(value) {
        this.data.push(value);//加入数组
        this.bubbleUp(this.size() - 1);//调整加入的元素在小顶堆中的位置
    }

    poll() {
        if (this.size() === 0) {
            return null;
        }
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;//交换第一个元素和最后一个元素
            this.bubbleDown(0);//bubbleDown操作
        }
        return result;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;//父节点的位置
            //如果当前元素比父节点的元素小，就交换当前节点和父节点的位置
            if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex);//交换自己和父节点的位置
                index = parentIndex;//不断向上取父节点进行比较
            } else {
                break;//如果当前元素比父节点的元素大，不需要处理
            }
        }
    }

    bubbleDown(index) {
        const lastIndex = this.size() - 1;//最后一个节点的位置
        while (true) {
            const leftIndex = index * 2 + 1;//左节点的位置
            const rightIndex = index * 2 + 2;//右节点的位置
            let findIndex = index;//bubbleDown节点的位置
            //找出左右节点中value小的节点
            if (
                leftIndex <= lastIndex &&
                this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
            ) {
                findIndex = leftIndex;
            }
            if (
                rightIndex <= lastIndex &&
                this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
            ) {
                findIndex = rightIndex;
            }
            if (index !== findIndex) {
                this.swap(index, findIndex);//交换当前元素和左右节点中value小的
                index = findIndex;
            } else {
                break;
            }
        }
    }

    swap(index1, index2) {//交换堆中两个元素的位置
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }

    size() {
        return this.data.length;
    }
}

var mergeKLists = function(lists) {
    const res = new ListNode(0);
    let p = res;
    const h = new Heap(comparator = (a, b) => a.val - b.val);
    lists.forEach(l => {//插入每个链表的第一个节点
        if(l) h.offer(l);
    })
    while(h.size()) {//
        const n = h.poll();//取出最小值
        p.next = n;//最小值加入p的next后
        p = p.next;//移动p节点
        if(n.next) h.offer(n.next);//插入最小节点的后一个节点
    }
    return res.next;
};
