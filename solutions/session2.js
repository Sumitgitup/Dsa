
// Question: https://www.geeksforgeeks.org/problems/find-the-smallest-and-second-smallest-element-in-an-array3226/1

function minAnd2ndMin(arr) {
    let min = Infinity;
    let secondMin = Infinity;
    for (const num of arr) {
        console.log("SecondMin: " + secondMin);

        if(num < min) {
            secondMin = min;
            min = num;
        }else if (num > min && num < secondMin) {
            secondMin = num
        }
    }
    if (secondMin === Infinity) return -1;
    return [min, secondMin]
}

const arr = [2, 4, 3, 5, 6]

console.log(minAnd2ndMin(arr));


// Question: https://www.geeksforgeeks.org/problems/sum-of-array2326/1

const arr = [1, 2, 3, 4]

function arraySum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum
}

console.log(arraySum(arr));


// Question: https://leetcode.com/problems/running-sum-of-1d-array/description

const nums = [1,2,3,4]

var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1];
    }
    return nums;
};

console.log(runningSum(nums));

// Question: https://leetcode.com/problems/left-and-right-sum-differences/description/

const nums = [10,4,8,3];

var leftRightDifference = function(nums) {
    const n = nums.length;
    const answer = [];

    let totalSum = 0;
    for(let num of nums) {
        totalSum += num
    }

    let leftSum = 0;

    for (let i = 0; i < n; i++) {
        const rightSum = totalSum - leftSum - nums[i];
        answer[i] = Math.abs(leftSum - rightSum);
        leftSum += nums[i]
    }

    return answer
}

console.log(leftRightDifference(nums));


// Questions: https://www.geeksforgeeks.org/problems/second-largest3735/1

const arr = [12, 35, 1, 10, 34, 1]

function getSecondLargest(Arr) {
    let max = 0;
    let secondLargest = 0;
    for(let num of arr ) {
        if (num > max) {
            secondLargest = max
            max = num;
        } else if (num < max && num > secondLargest) {
            secondLargest = num;
        }
        
    }
    if (secondLargest === 0) -1;
    return secondLargest;
}

console.log(getSecondLargest(arr));