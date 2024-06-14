module.exports = function merge(nums1, m, nums2, n) {
    let nums1LastIndex = m - 1;
    let nums2LastIndex = n - 1;
    let nums1LastIndex_final = n + m - 1;

    while (nums1LastIndex_final >= 0) {
        if (nums1LastIndex < 0 || (nums2LastIndex >= 0 && nums2[nums2LastIndex] >= nums1[nums1LastIndex])) {
            nums1[nums1LastIndex_final] = nums2[nums2LastIndex];
            nums2LastIndex--;
        } else {
            nums1[nums1LastIndex_final] = nums1[nums1LastIndex];
            nums1LastIndex--;
        }
        nums1LastIndex_final--;
    }
    return nums1;
}