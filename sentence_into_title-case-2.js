const sentence = "enter a sentence"

let words = sentence.split(" ")
let newSentence = []

for(let i=0;i<words.length;i++){
    let alphabate = words[i].split("")
    alphabate[0]=alphabate[0].toUpperCase()
    const joinWords = alphabate.join("")
    newSentence.push(joinWords)
}
console.log("Sentence ---->>",sentence)
console.log("Converted Sentence ----->>",newSentence.join(" "))