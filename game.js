var num = 4;
var input = prompt("choose a number: ");
if(Number(input) === num){
    alert("Guessed it Right!")
} else if(Number(input) > num){
    alert("Too High")
} else{
    alert("Too low")
}