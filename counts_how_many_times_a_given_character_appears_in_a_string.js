const word = "oxoooooooooo"
const givenCharacter = "o"
let character = word.split("")
console.log(character) 
let count = 0

for(let i=0;i<character.length;i++){
    if(character[i] === givenCharacter){
        count=count+1
    }
}

console.log(`${givenCharacter} is appeared ${count} times`)