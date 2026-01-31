

// var replaceElements = function (arr) {
//     let maxRight = -1;
//     for (let i = arr.length - 1; i >= 0; i--) {
//         let current = arr[i];
//         arr[i] = maxRight;
//         maxRight = Math.max(maxRight, current);
//     }
//     return arr;
// }
// const arr = [17, 18, 5, 4, 6, 1]
// console.log(replaceElements(arr));

// Question: https://www.geeksforgeeks.org/problems/intersection-of-two-arrays2404/1

class Solution {
    intersectSize(a, b) {
        // code here
        let set = new Set(b);
        let count = 0;
        for (let num of a) {
            if (set.has(num)) {
                count++;
                set.delete(num)
            }
        }
        return count;
    }
}
const a = [89, 24, 75, 11, 23];
const b = [89, 24, 4];
const sol = new Solution();
console.log(sol.intersectSize(a, b));