
// Question: https://leetcode.com/problems/plus-one/

const digits = [9, 9, 9];

function plusOne (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0
        }
    }
    return [1, ...digits];
}

console.log(plusOne(digits));

// Question: https://www.geeksforgeeks.org/problems/rotate-array-by-n-elements-1587115621/1

const arr = [1, 2, 3, 4, 5]
const d = 2

function rotateArr(arr, d) {
    const n = arr.length;
    d = d % n;

    reverse(arr, 0, d-1);
    reverse(arr, d, n-1);
    reverse(arr, 0, n-1);

    function reverse(arr, l, r) {
        while(l < r) {
            let temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp
            r--;
            l++;
        }
       
    }
    return arr
}


console.log(rotateArr(arr, d));

// Question: https://leetcode.com/problems/max-consecutive-ones/description/
// Pre-requisite for session 5

// const nums = [1, 1, 0, 1, 1, 1, 1]

function findMaxConsecutiveOnes(nums) {
    const n = nums.length;
    let count = 0;
    let i = 0
    let result = -Infinity
    while (i < n) {
        if (nums[i] === 0) {
            count = 0;
        } else {
            count++;
        }
        result = Math.max(result, count);
        i++;
    }

    return result;
}

console.log(findMaxConsecutiveOnes(nums));
