// Question: https://leetcode.com/problems/squares-of-a-sorted-array/description/

// const nums = [-7,-3,2,3,11];

// Output: [0,1,9,16,100]

// var sortedSquares = function(nums) {
// let left = 0;
// let right = nums.length - 1;
// let result = [0];
// let idx = nums.length -1;

// while (left <= right) {
//     let leftSq = nums[left] * nums[left];
//     let rightSq = nums[right] * nums[right];
//     if (leftSq > rightSq) {
//         result[idx--] = leftSq
//         left++
//     } else {
//         result[idx--] = rightSq
//         right--
//     }
// }
// return result

// Brute Force
//     let result = [0];
//     for (let i = 0; i < nums.length; i++) {
//         result [i] = nums[i] * nums[i];
//     }
//     for (let i = 0; i < result.length - 1; i++) {
//         for (let j = i + 1; j < result.length; j++) {
//             if (result[i] > result[j]) {
//                 let temp = result[i];
//                 result[i] = result[j];
//                 result[j] = temp
//             }
//         }
//     }
//     return result
// }

// console.log(sortedSquares(nums));

// Question: https://leetcode.com/problems/merge-sorted-array/description/

// const nums1 = [0];
// const m = 0;
// const nums2 = [1];
// const n = 1;

// // Output: [1, 2, 2, 3, 5, 6]

// var merge = function(nums1, m, nums2, n) {
//     let left = m-1;
//     let right = n-1;
//     let k = m + n - 1;
//     while(left >= 0 && right >= 0) {
//         if (nums1[left] > nums2[right]) {
//             nums1[k] = nums1[left];
//             left--;
//         } else {
//             nums1[k] = nums2[right];
//             right--;
//         }
//         k--
//     }
//     while (right >= 0) {
//         nums1[k] = nums2[right];
//         right--;
//         k--;
//     }
//     return nums1
// };

// console.log(merge(nums1, m, nums2, n));

// Question: https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-with-distinct-elements/1

// const a = [1, 2, 3, 4, 5];
// const b = [1, 2, 3, 6, 7]

// // Output: 1 2 3 4 5 6 7

// function findUnion(a, b) {
//     // your code here
//     let result = [];
//     let left = 0;
//     let right = 0;
//     while (left < a.length && right < b.length) {
//         if (a[left] < b[right]) {
//             result.push(a[left])
//             left++
//         } else if (a[left] === b[right]) {
//             result.push(a[left])
//             left++
//             right++
//         }else {
//             result.push(b[right])
//             right++
//         }

//     }
//     while (left < a.length) {
//         result.push(a[left])
//         left++
//     }

//     while (right < b.length) {
//         result.push(b[right]);
//         right++
//     }
//     return result
// }

// console.log(findUnion(a, b));

// Question: https://leetcode.com/problems/set-mismatch/

const nums = [1, 2, 2, 4];
// Output = [2, 3];

var findErrorNums = function (nums) {
  let duplicate = -1;
  let missing = -1;
  for (let i = 0; i < nums.length; i++) {
    let val = Math.abs(nums[i]);
    let idx = val - 1;

    if (nums[idx] < 0) {
      duplicate = val;
    } else {
      nums[idx] = -nums[idx];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      missing = i + 1;
    }
  }

  return [duplicate, missing];
};

console.log(findErrorNums(nums));
