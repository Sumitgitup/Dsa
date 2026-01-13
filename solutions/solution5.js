
const arr = [1, 0, 0, 1, 0, 1, 0, 1];

function maxOnes(arr, k) {
    let maxLen = 0;
    let zeros = 0;
    let left = 0;
    for (let right = 0; right < arr.length; right++) {
        if (arr[right] === 0) {
            zeros++
        } 
        while (zeros > k) {
            if (arr[left] === 0) {
                zeros--
            }
            left++
        }
        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen;
}

console.log(maxOnes(arr, 2));