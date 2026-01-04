// Question: https://www.interviewbit.com/problems/array2d/

// Lets say performOps was called with A : [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]] .
// What would be the output of the following call :

// const A = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]] 
// function performOps(A){
//     m= A.length
//     n=A[0].length
//     B=[]
//     for(i = 0; i < m;i++){
//         B.push(new Array(n));
//         for(j=0;j< n;j++){
//             B[i][n-1-j] = A[i][j]
//         }
//     }
//     return B
// }

// B = performOps(A)
// for (i = 0; i < B.length; i++) {
//     for (j = 0; j < B[i].length; j++) 
//         process.stdout.write(B[i][j]+" ");
// }


// Question: https://www.interviewbit.com/problems/arrayimpl1/

// Lets say performOps was called with A : [5, 10, 2, 1].
// What would be the output of the following call :

// ( NOTE : The output shoudl be written in the below provided text field , there should not be any ‘,’ between the numbers . For example: 1 2 3 4 )

// const arr = [5, 10, 2, 1];

// function performOps(A){
//     B = new Array(2 * A.length)

//     for (var i = 0; i < A.length; i++) {
//         B[i] = A[i];
//         B[i + A.length] = A[(A.length - i) % A.length];
//     }
//     return B;
// }

// B = performOps(arr)
// for (var i = 0; i < B.length; i++) {
//     process.stdout.write(B[i]+" ");
// }


// Question: https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1

// const arrr = [1, 2, 3, 4, 5, 3, 67];
// const x = 67;

// function search(arrr, x) {
//     for (const num in arrr) {
//         if (arrr[num] === x) {
//             return num;
//         }
//     }

//     return -1;
// }

// console.log(search(arrr, x));


// Question: https://leetcode.com/problems/find-pivot-index/description/

const nums = [1,7,3,6,5,6];

function pivotIndex(nums) {
    const totalSum = nums.reduce((sum, n) => sum + n, 0);
    let leftSum = 0
    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalSum - leftSum  - nums[i];
        console.log("For " + [i] + "th " + "rightSum: " + rightSum);
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += nums[i]
        console.log("For " + [i] + "th " + "leftSum: " + leftSum);
    }
    return -1;
}

console.log(pivotIndex(nums));