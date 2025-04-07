//Find the largest number 
const a = 150;
const b = 50;
const c = 20;

if(a>b && a>c){
    console.log("a is greater");
}

else if(b>a && b>c){
    console.log("b is greater");
}

else{
    console.log("c is greater");
}

//Find the largest number from an array
let arr = [1050,30,150,550]
var tempVal = arr[0]
for(i=0;i<=arr.length;i++){
    if(arr[i+1]>tempVal){
        tempVal = arr[i+1]
    }
}

console.log("Largest vale is >>>>>>",tempVal)
