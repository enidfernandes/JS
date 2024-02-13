var num1 = parseInt(prompt("enter num1 "));
var num2 = parseInt(prompt("enter num2"));

function sub(num1,num2){
    return num1 - num2;
}

function add(num1,num2){
    return num1 + num2;
}

var addResult = add(num1,num2);
var subResult = sub(num1,num2);
console.log(addResult)
document.getElementById("spanAdd").innerText = addResult;

document.getElementById("spanSub").innerText = subResult;