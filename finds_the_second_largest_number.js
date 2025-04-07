let numArray = [500,800,100,10,1000,1500,1800]
const largeArray = []
const arrayLength = numArray.length


//format array
for(let i=0;i<arrayLength;i++){
    let largenumber = Math.max(...numArray)
    largeArray.push(largenumber)
    numArray = numArray.filter(num => num!==largenumber)
}

console.log(`Second largest number is ${largeArray[1]}`)


