function findDuplicates(arr){
let duplicate = new Set()
let dup=new Set()
for(let i=0;i<arr.length;i++){
    if(!duplicate.has(arr[i])){
        // console.log(arr[i]);
        duplicate.add(arr[i])

    }
    else{
         dup.add(arr[i])
        // if(!dup.includes(arr[i])){
        //         // console.log(arr[i]);
        //         dup.push(arr[i])

        // }
    }
   
}
return dup
}

let arr = [1,2,3,4,2,5,1,6,6,4,7,3,1,7]

console.log(findDuplicates(arr));