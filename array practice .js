// 1 -- find secondmax numbers --

// let arr = [23, 54, 65, 76, 35, 24, 69];
// let max = -infinite;
// let secondmax = -infinite;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         secondmax = max;
//         max = arr[i];

//     } else if (arr[i] > secondmax && arr[i] !== max) {
//         secondmax = arr[i];
//     }
// }
// console.log(secondmax);

// 2 -- find smallest elements --

// let arr =[32,43,2,-32,43,54,32,23];
// let smallestnum =arr[0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<smallestnum){
//         smallestnum=arr[i];
//     }
// }
// console.log(smallestnum);

// 3 --sum of arr --

// let arr =[23,43,54,64,56,76,67];
// let sum=0;

// for(let i=0; i<arr.length; i++){
//     sum =sum+arr[i];
// }
// console.log(sum);

// 4 --count odd numbers --

// let arr = [23, 43, 54, 64, 56, 76, 67];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         count++;      
//     }    
// }
// console.log(count);

// 5 -- reverse array --

// let arr = [23, 43, 76, 67];
//  let reversedArr = [];

//  for(let i=arr.length-1; i>=0; i--){
//     reversedArr.push(arr[i]);
//  }
//  console.log(reversedArr);

// 6 -- check arr is in accending orde or not --

// let arr =[23,43,54,64,76];
// let isAccending = true;

// for(let i=0; i<arr.length-1; i++){
//     if(arr[i] > arr[i+1]){
//         isAccending =false;
//         break;
//     }
// }
//  console.log(isAccending);

// 7 -- check arr is in decending order or not --

// let arr =[76,88,64,54,43,23];
// isDeccending = true;
// for(let i=0; i<arr.length-1; i++){
//     if(arr[i+1]> arr[i]){
//         isDeccending =false;
//         break;
//     }
// }
// console.log(isDeccending);

// 8 -- count frequency of elements in arr --

//   let arr =[23,43,54,23,43,54,23];
//   let freq={};

//   for(let i=0; i<arr.length; i++){
//     let element = arr[i];

//     if(freq[element] === undefined){
//         freq[element] =1;
//     } else {
//         freq[element]++;
//     }
//   }
//     console.log(freq);

// sum of even numbers in arr --

// let arr =[23,43,54,64,56,76,67];
// let evenSum =0;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2 === 0){
//         evenSum = evenSum + arr[i];
// }
// }
// console.log(evenSum);

// 9 -- palindrome number --

// let isPalindrome (str)  {
//     let left =0;
//     let right = str.length -1;

//     while(left < right){
//         if(str[left] !== str[right]){
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }
// isPalindrome("madam");
 
