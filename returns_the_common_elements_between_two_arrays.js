const arr1 = [1,2,50,350,22,50]
const arr2 = [10,123,1,350,20,5]
let temp = []

for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i] === arr2[j]){
            temp.push(arr1[i])
        }
    }
}

console.log("Common elements are",temp.join(" "))