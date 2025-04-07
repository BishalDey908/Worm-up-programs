const arr = [1,2,3,4,6,7,8]
let i 
for(i=0;i<arr.length;i++){
    if(arr[i] !== i+1) {
        console.log(`missing number is ${i+1}`)
        break
    }
}

