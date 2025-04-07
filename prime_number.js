const num = 5

let val


for(let i=2;i<num;i++){
    if(num%i===0 ){
        val= "not prime"
        break
    }else{
        val = "prime"
        continue
    }
}
console.log(val)