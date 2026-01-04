
const nums = [1,7,3,6,5,6]

function pivotIndex(nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        let leftSum = 0;
        let rightSum = 0;
        
        // calculate left sum
        for (let j = 0; j < i; j++) {
            leftSum += nums[j];
            console.log("leftSum: " + leftSum);
        }

        // calculate right sum
        for (let j = i + 1; j < n; j++) {
            rightSum += nums[j];
            console.log("Rightsum: " + rightSum);
        }
        
        if (leftSum === rightSum) {
            return i;
        }
    }

    return -1;
}

console.log(pivotIndex(nums));