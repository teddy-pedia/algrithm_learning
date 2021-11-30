/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const newArr = combineArrs(nums1, nums2)
    let len = newArr.length
    if (len % 2 === 0) {
        let left = len / 2 - 1
        let right = len / 2
        return (newArr[left] + newArr[right]) / 2
    } else {
        return newArr[Math.floor(len / 2)]
    }
}

const combineArrs = (nums1, nums2) => {
    let m = nums1.length,
        n = nums2.length
    if (m === 0) return nums2
    else if (n === 0) return nums1
    let i = 0,
        j = 0
    const newArr = []
    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            newArr.push(nums1[i++])
        } else {
            newArr.push(nums2[j++])
        }
    }
    i === m && newArr.push(...nums2.slice(j))
    j === n && newArr.push(...nums1.slice(i))
    return newArr
}
