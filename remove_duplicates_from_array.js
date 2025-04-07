let arr = [1,2,5,5,6,7,8,9,9]



for(let i =0;i<=arr.length;i++){
    if(arr[i]===arr[i+1]){
         arr.splice(i, 1)
        }
    }
    
    console.log(arr)