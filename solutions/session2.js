
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


