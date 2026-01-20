// Question: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/submissions/1890809605/

const nums = [1, 1, 1, 2, 2, 3];
//Output: 5, nums = [0,0,1,1,2,3,3,_,_]

// var removeDuplicates = function(nums) {
//     if (nums.length <= 2) return nums;

//     let write = 2;
//     for (let i = 2; i < nums.length; i++) {
//         if (nums[i] !== nums[write-2]) {
//             nums[write] = nums[i];
//             write++;
//         }
//     }
//     return write
// //    return nums
// };

// console.log(removeDuplicates(nums));

// Question: https://www.geeksforgeeks.org/problems/intersection-of-two-sorted-array-1587115620/1

const arr1 = [2, 3, 4, 6];
const arr2 = [1, 3, 4, 4, 6, 8, 8, 9, 11, 12];
// Output: [2, 4]
function intersection(arr1, arr2) {
  // code here
  let i = 0,j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
      while (j < arr2.length && arr2[j] === arr2[j - 1]) {
        j++;
      }
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}
console.log(intersection(arr1, arr2));
