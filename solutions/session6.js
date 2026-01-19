
// Question: https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/description/

// const arr = [1, 1];

// function maxScoreIndices (arr) {
//     let rightOne = 0;

//     for (const num of arr) {
//         if (num === 1) rightOne++;
//     }

//     let leftZero = 0;
//     let maxScore = leftZero + rightOne;
//     let resultIndices = [0];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             leftZero++
//         } else rightOne--;
//         let currentScore = leftZero + rightOne;

//         if (currentScore > maxScore) {
//             maxScore = currentScore;
//             resultIndices = [i + 1]
//         } else if (currentScore === maxScore) {
//             resultIndices.push(i+1)
//         }
//     }
//     return resultIndices
// }

// console.log(maxScoreIndices(arr));


// Same question as all-divisions-with-the-highest-score-of-a-binary-array

const s = "LRRLLR";

function maxLAndR(s) {
  let R = 0;
  for (const char of s) {
    if (char === "R") R++;
  }

  let L = 0;
  let maxScore = L + R;
  let result = [0];

  for (let i = 0; i < s.length; i++) {
    let splitindex = i + 1;

    if (s[i] === "L") {
      L++;  
    } else R--;

    const currentScore = L + R;
    if (currentScore > maxScore) {
      maxScore = currentScore;
      result = [splitindex];
    } else if (currentScore === maxScore) {
      result.push(splitindex);
    }
  }
  return result;
}

console.log(maxLAndR(s));
