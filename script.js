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


//