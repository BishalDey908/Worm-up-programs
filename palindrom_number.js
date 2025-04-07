const value ="madam2"

const valueToArray = value.split("")
const mainvValue = valueToArray.join("")
console.log(mainvValue)

const reversedvalueToArray = valueToArray.reverse()
const reversedvalue = reversedvalueToArray.join("")
console.log(reversedvalue)

if(valueToArray === reversedvalue){
    console.log("The string is a palindrome")
}else{
    console.log("The string is not a palindrome")
}
