
const arr = [12]
const target = 12;

function search(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

console.log(search(arr, target));