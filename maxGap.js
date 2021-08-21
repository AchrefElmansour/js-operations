const { sortMyArray } = require("./arrayOperation");

exports.maxGap = (arr) => {
  sortMyArray(arr);
  let maxDiff = arr[1] - arr[0];
  for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1];
    maxDiff = Math.max(diff, maxDiff);
  }
  console.log(maxDiff);
};

