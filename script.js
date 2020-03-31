//1. If you have a code that you need to reuse so you can have a dry code
//2.


//write a function definition without parameters


function reverseString(string){
    let stepCount = string.length
    for(let i + 0; stepCount; i++)

}

reverseString("four"){

}



function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');

//2
function numberSquared(num){
    return num * num
}
numberSquared(3)

console.log(numberSquared(3))



cuntion adder(num1 = 0, num2 = 0, num3 = 0) {
    if (num1 === undefined && 
        num2 === undefined &&
        num3 === undefined) {
            return 10
        }
        if(num1 = undefined) {
            num1 = 0
        }
    num1= num1 || 0
    num2= num2 || 0
    num3= num3 || 0

    return num1 + num2 + num3 
}
const answer1 = adder(1, 2, 4)
console.log('adder answer' , answer)
const answer2 = adder()
console.log('adder answer' , answer)
const answer3 = adder(1, 2,)
console.log('adder answer' , answer)


//this was my version of it

function adder(num1, num2, num3){
    return num1 + num2 + num3
}
console.log(adder(1, 2, 3))

//Take a number and add some amount of zeroes 
//to the end, returning it 
//(make sure you return a number, not a string)

function addZeros(num1, zeroCount){
    const result = num1 * (10 ** zeroCount)
    return result
}
console.log(addZeros(56, 3))

//return a function 
//(yes you can write functions inside functions!)
function heck( a, b){
    return a + b
}

console.log(heck)
//second attempt, actually just following what hes doing 
//in class cause im confused about what th quetsion
// is even asking i guess
function outerFunction() {
    console.log('outerFunction')

    function innerfunction() {
        console.log('innter function')
    }
    return innerFunction
}

const answer = outerFunction()

//last one?

const myArray = ['1', '2', '3']
function removeItem(ArrayItem){
    myArray.splice[ArrayItem]

}
console.log(removeItem(0))
removeItem(0)

//add flabbergasted to an array

const BestArray = ['5', '6', '7']
function addFlab(arrayName){
    arrayName.push('flabbergasted')
}
addFlab(BestArray)
console.log(BestArray)
//in this arrayName is the name of the array that you
//want
//this is the teachers solution 
const BestArray = ['5', '6', '7']
function addFlab(){
    BestArray.push('flabbergasted')
}
addFlab(BestArray)
console.log(BestArray) 