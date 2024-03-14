const arr = [10, -2, 8, 15, -5,20,3];
const twoSum = (arr) => {
  let maxsum = 0;
  for (let i=0; i<arr.length; i++) {
    for (let j=i+1; j<arr.length; j++) 
    { 
      let sum = arr[j] + arr[i];
      if (sum > maxsum) {
        maxsum = sum;
      }
    }
  }
  return maxsum;
}
console.log(twoSum(arr));