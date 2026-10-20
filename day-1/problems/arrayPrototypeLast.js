const nums = [null, {}, 3];
const names = [];

Array.prototype.last = function () {
    if(this.length <= 0){
        return -1
    }
  return this[this.length - 1];
};

console.log(nums.last());
console.log(names.last());
