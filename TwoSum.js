

nums = [2,4,3,7,8,11,12]
target=21
function twoSumSingle(nums, target) {
  let map = new Map()
  
  for(let i =0;i<nums.length;i++){
    let diff= target-nums[i]
    if(map.has(diff)){
        return [map.get(diff),i]
    }
    map.set(nums[i], i)
  }
  return "No data found"
}
let responseSingle = twoSumSingle(nums,target)
console.log( "\n", responseSingle)



