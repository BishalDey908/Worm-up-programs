
function findLargestWord(){
    const sentance = "My name is Bishal Dey I'm a Engineer"
    let words = sentance.split(" ");
    
    let arrLengthArr = []
    
    for(let i=0;i<words.length;i++){
        let word = words[i]
        let wordArr = word.split("")
        let wordArrLength = wordArr.length
        arrLengthArr.push(wordArrLength)
    }
    
    
    let max = 0
    for(let i=0;i<arrLengthArr.length;i++){
        if(arrLengthArr[i+1]>arrLengthArr[i]){
            max=i+1
        }
    }
    
    console.log(`The longest word is ${words[max]}`)
}
findLargestWord()