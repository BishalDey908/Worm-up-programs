const word= "Bishal"
let arrWord = word.split("")
console.log(arrWord)
let count = 0

for(let i=0;i<=arrWord.length;i++){
    if(arrWord[i]==="a" || arrWord[i]==="e" || arrWord[i]==="i" || arrWord[i]==="o" || arrWord[i]==="u"){
      count = count + 1
    }
}
console.log(`Total vouel is ${count}`)