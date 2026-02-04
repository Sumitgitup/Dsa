
// Question: https://www.geeksforgeeks.org/problems/search-insert-position-of-k-in-a-sorted-array/1

const arr = [2, 6, 7, 10, 14]
const k = 15

class Solution {
    searchInsertK(arr, k) {
        // code here
        let start = 0;
        let end = arr.length -1;
        while (start <= end) {
            let mid = start + Math.floor((end - start) /2 );
            if (arr[mid] < k) {
                start = mid + 1
            } else if (arr[mid] === k) {
                return mid
            } else {
                end = mid - 1
            }
        }
        return start
    }
}

const result = new Solution();
console.log(result.searchInsertK(arr,k));