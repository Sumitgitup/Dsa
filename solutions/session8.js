
// Question: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/submissions/1890809605/

const nums = [1,1,1,2,2,3]
//Output: 5, nums = [0,0,1,1,2,3,3,_,_]

var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums;

    let write = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[write-2]) {
            nums[write] = nums[i];
            write++;
        }
    }
    return write
//    return nums
};

console.log(removeDuplicates(nums));