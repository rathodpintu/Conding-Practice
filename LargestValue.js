let input = [1,3,99,6,97,2,34]

let high = -Infinity

for(let i=0;i<input.length;i++){
  let temp = input[i]
  if(high<temp){
    high=temp
  }
}
// let hi=Math.max(...input)
console.log("Highest Value",high, hi)