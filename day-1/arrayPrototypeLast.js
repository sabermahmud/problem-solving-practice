// const nums = [null, {}, 3];
// const names = [];
// const nums2 = [1]

// Array.prototype.last = function () {
//     if(this.length <= 0){
//         return -1
//     }
//   return this[this.length - 1];
// };

// console.log(nums.last());
// console.log(names.last());
// console.log(nums2.last());



const nums = [3, 4, 5, 6, 3, 5, 6, 7];

Array.prototype.last = function (){
  return this.length === 0 ? -1 : this[this.length-1]
}

console.log(nums.last())






















