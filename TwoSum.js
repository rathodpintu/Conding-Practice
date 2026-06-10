
const arr =[1,3,0,7,0,5,66,0,6,8,9]
function moveZero(arr){
    count = 0;
    for(let i=0; i<arr.length;i++){
       
        if(arr[i]!==0){
             temp = arr[i]
             arr[i] = arr[count]
             arr[count]=temp
             
            count ++
        }
       
    }
    return arr
}

console.log(moveZero(arr));