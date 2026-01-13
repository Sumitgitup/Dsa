

// Question : https://www.geeksforgeeks.org/dsa/max-number-of-one-ii/

function maxConsecutiveOne(arr) {
    let left = 0;
    let zeroCount = 0;
    let maxLen = 0;

    for (let right = 0; right < arr.length; right++) {
        if (arr[right] === 0) {
            zeroCount++;
        }

        while (zeroCount > 1) {
            if (arr[left] === 0) zeroCount--;
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen
}

let arr = [0, 1, 0, 1, 1, 0, 1, 1, 1];
console.log(maxConsecutiveOne(arr))


// Question: https://www.geeksforgeeks.org/problems/maximize-number-of-1s0905/1hh

// function maxOnes(arr, k) {

// let maxLen = 0;
// let zeros = 0;
// let left = 0;
// for (let right = 0; right < arr.length; right++) {
//     if (arr[right] === 0) {
//         zeros++
//     } 
//     while (zeros > k) {
//         if (arr[left] === 0) {
//             zeros--
//         }
//         left++
//     }
//     maxLen = Math.max(maxLen, right - left + 1)
// }
// return maxLen;
// }