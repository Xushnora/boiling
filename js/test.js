let arr = [
    [1, 1, 1, 1],
    [5, 2, 2, 100],
    [9, 4, 2, 1]
]

for(let i = 0; i < arr[0].length; i++) {
    arr[0][i] += arr[0][i - 1];
}
for (let i = 0; i < arr.length; i++) {
    arr[i][0] += arr[i - 1][0];
}

// console.log(arr);


//    columnArr[1] = columnArr[0] + columnArr[1];
//    columnArr[2] = columnArr[1] + columnArr[2];

// rowArr[1] = rowArr[1] + rowArr[0];
// rowArr[2] = rowArr[2] + rowArr[1];
// rowArr[3] = rowArr[3] + rowArr[2];

