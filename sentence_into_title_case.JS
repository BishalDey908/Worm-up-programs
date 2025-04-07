const sentence = "my name is bishal dey"

const words = sentence.split(" ")
let convertArray = []

for(let i =0;i<words.length;i++){
    let letterArray = words[i]
    letterArray =letterArray.split("")
    let convert = letterArray[0].toUpperCase()
    letterArray[0] = convert
    convertArray.push(letterArray.join(""))
    
}
console.log(convertArray)