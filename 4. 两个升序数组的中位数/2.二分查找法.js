/**
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = (nums1, nums2) => {
    let m = nums1.length, n = nums2.length, index1 = 0, index2 = 0
    const totalLength = m + n
    if (totalLength % 2 === 0) {
        let midIndex1 = totalLength >> 1, midIndex2 = (totalLength >> 1) - 1
        let median1 = getKthElement(nums1, nums2, midIndex1 + 1)
        let median2 = getKthElement(nums1, nums2, midIndex2 + 1)
        return (median1 + median2) / 2
    } else {
        let midIndex = totalLength >> 1
        return getKthElement(nums1, nums2, midIndex + 1)
    }
}

const getKthElement = (nums1, nums2, k) => {
    /* 主要思路：要找到第 k (k>1) 小的元素，那么就取 pivot1 = nums1[k/2-1] 和 pivot2 = nums2[k/2-1] 进行比较
     * 这里的 "/" 表示整除
     * nums1 中小于等于 pivot1 的元素有 nums1[0 .. k/2-2] 共计 k/2-1 个
     * nums2 中小于等于 pivot2 的元素有 nums2[0 .. k/2-2] 共计 k/2-1 个
     * 取 pivot = min(pivot1, pivot2)，两个数组中小于等于 pivot 的元素共计不会超过 (k/2-1) + (k/2-1) <= k-2 个
     * 这样 pivot 本身最大也只能是第 k-1 小的元素
     * 如果 pivot = pivot1，那么 nums1[0 .. k/2-1] 都不可能是第 k 小的元素。把这些元素全部 "删除"，剩下的作为新的 nums1 数组
     * 如果 pivot = pivot2，那么 nums2[0 .. k/2-1] 都不可能是第 k 小的元素。把这些元素全部 "删除"，剩下的作为新的 nums2 数组
     * 由于我们 "删除" 了一些元素（这些元素都比第 k 小的元素要小），因此需要修改 k 的值，减去删除的数的个数
     */
    let m = nums1.length, n = nums2.length
    let index1 = 0, index2 = 0

    while(1) {
        // 考虑边界情况
        if(index1 === m) {
            // 此时nums1被排除空了，直接返回nums2中第k大元素
            return nums2[index2 + k - 1]
        }else if(index2 === n) {
            return nums1[index1 + k - 1]
        }else if(k === 1) {
            // 当k为1时，返回比较的较小值
            return Math.min(nums1[index1], nums2[index2])
        }

        // 正常情况
        let half = k >> 1
        let newIndex1 = Math.min(m, index1 + half) - 1
        let newIndex2 = Math.min(n, index2 + half) - 1
        let pivot1 = nums1[newIndex1], pivot2 = nums2[newIndex2]
        if(pivot1 < pivot2) {
            // 排除从index1到newIndex1的所有元素
            k -= (newIndex1 - index1 + 1)
            index1 = newIndex1 + 1
        }else{
            k -= (newIndex2 - index2 + 1)
            index2 = newIndex2 + 1
        }
    }
}

const nums1 = [1,2], nums2 = [3,4]
console.log(findMedianSortedArrays(nums1, nums2))
