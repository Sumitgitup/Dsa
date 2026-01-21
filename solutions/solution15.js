
// https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function (nums) {
    let arr = new Set();
    for ( let i = 0; i < nums.length; i++) {
        if (arr.has(nums[i])){
            return true
        } else {
            arr.add(nums[i])
        }
    }
    return false
};
const nums = [1, 2, 3, 1]
console.log(containsDuplicate(nums));

// https://leetcode.com/problems/single-number/description/

var singleNumber = function(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num
    }
    return result
};
const arr = [4, 1, 2, 1, 2];
console.log(singleNumber(arr));