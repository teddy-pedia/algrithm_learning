/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = m - 1,
        k = n - 1,
        index = m + n - 1
    while (i >= 0 && k >= 0) {
        nums1[index--] = nums1[i] > nums2[k] ? nums1[i--] : nums2[k--]
    }
    while (k >= 0) nums1[index--] = nums2[k--] // nums2中剩余元素拷贝到nums1
}

let nums1 = [0],
    m = 0,
    nums2 = [1],
    n = 1
merge(nums1, m, nums2, n)
