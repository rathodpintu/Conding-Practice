
function removeDuplicate(str){
    let uniq= []
    for(let i=0; i < str.length;i++){
         if(!uniq.includes(str[i])){
            //   uniq += str[i]
            uniq.push(str[i])
         }
    }
   
    return uniq
}


let input = [1,2,3,2,3,4,5,4,4]
console.log(removeDuplicate(input))