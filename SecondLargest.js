
let input = [1,3,99,6,97,2,34,99]
let high=-Infinity
let second = -Infinity
// let min = Math.max(...input)
for(let i =0;i<input.length;i++){
  let temp = input[i]
  if(high<temp){
    second=high
    high=temp
  }
 else if(temp>second && high !== temp){
   second=temp
 }
}
console.log(second)