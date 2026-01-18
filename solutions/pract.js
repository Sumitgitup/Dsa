// // const nums = [1,7,3,6,5,6]

// // function pivotIndex(nums) {
// //     const n = nums.length;

// //     for (let i = 0; i < n; i++) {
// //         let leftSum = 0;
// //         let rightSum = 0;

// //         // calculate left sum
// //         for (let j = 0; j < i; j++) {
// //             leftSum += nums[j];
// //             console.log("leftSum: " + leftSum);
// //         }

// //         // calculate right sum
// //         for (let j = i + 1; j < n; j++) {
// //             rightSum += nums[j];
// //             console.log("Rightsum: " + rightSum);
// //         }

// //         if (leftSum === rightSum) {
// //             return i;
// //         }
// //     }

// //     return -1;
// // }

// // console.log(pivotIndex(nums));

// const arr = [10, 4, 8, 3];

// function leftRightDifference(arr) {
//     const n = arr.length;
//     const answer = [];

//     let leftSum = 0;
//     let totalSum = arr.reduce((sum, n) => sum + n, 0);
//     for (let i = 0; i < n; i++) {
//         const rightSum = totalSum - leftSum - arr[i];
//         answer[i] = Math.abs(leftSum-rightSum);
//         leftSum += arr[i]
//     }
//     return answer
// }

// console.log(leftRightDifference(arr));

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     let result = nums[i] + nums[i+1];
//     if (result === target) {
//       return [i, i+1];
//     }
//   }
// };

// console.log(twoSum([3, 2, 4], 6));


// var maxScoreIndices = function(nums) {
//     console.log("--- START DEBUGGING ---");
//     console.log("Input Array:", nums);
//     const n = nums.length;
//     let rightOnes = 0;
//     for (let num of nums) {
//         if (num === 1) rightOnes++;
//     }
//     let leftZeros = 0;
//     let maxScore = leftZeros + rightOnes;
//     let resultIndices = [0]; 
//     console.log(`\n[INIT] Split Index 0 (Start):`);
//     console.log(`   Left Zeros: ${leftZeros}, Right Ones: ${rightOnes}`);
//     console.log(`   Current Score: ${maxScore}`);
//     console.log(`   Max Score So Far: ${maxScore}`);
//     console.log(`   Result Indices: ${JSON.stringify(resultIndices)}`);

//     for (let i = 0; i < n; i++) {
//         const num = nums[i];
//         const splitIndex = i + 1;

//         console.log(`\n[STEP] processing index i=${i} (Value: ${num})`);
//         console.log(`   -> Moving wall to Split Index ${splitIndex}`);
//         if (num === 0) {
//             leftZeros++; 
//             console.log(`   -> Found a 0! Added to Left Zeros.`);
//         } else {
//             rightOnes--; 
//             console.log(`   -> Found a 1! Removed from Right Ones.`);
//         }
        
//         let currentScore = leftZeros + rightOnes;
//         console.log(`   -> New Counts | Left Zeros: ${leftZeros}, Right Ones: ${rightOnes}`);
//         console.log(`   -> Score at Split Index ${splitIndex}: ${currentScore}`);

//         if (currentScore > maxScore) {
//             console.log(`   *** NEW HIGH SCORE! Updating max from ${maxScore} to ${currentScore} ***`);
//             maxScore = currentScore;
//             resultIndices = [splitIndex]; // Reset list with new winner
//         } else if (currentScore === maxScore) {
//             console.log(`   *** TIE SCORE! Adding index ${splitIndex} to list ***`);
//             resultIndices.push(splitIndex); // Append to winners
//         } else {
//             console.log(`   (Score ${currentScore} is lower than max ${maxScore}, ignoring)`);
//         }
//     }
    
//     console.log("\n--- FINAL RESULT ---");
//     return resultIndices;
// };

// maxScoreIndices([0, 0, 1, 0]);

// Sliding window with two pointer
const arr = [0, 1, 0, 1, 1];
function maxOneZeroFlip(arr) {
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

    return maxLen;
}


