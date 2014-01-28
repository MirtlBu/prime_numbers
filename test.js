function check(num){
    if (isNaN(num)){
        return "Input a number";
    }
    else{
        if(isPrime(num) && isPositive(num)){
            return "It's a prime number.";
        }
        else{
            return "It's not a prime number.";
        }
    }
}
function isPrime(number){
    for(var i = 2; i < number; i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}
function isPositive(number){
    if(number > 0){
        return true;
    }
}
function increment(){
    var inp = Number(document.getElementById("inp").value);
    inp += 1;
    document.getElementById("inp").value = inp;
    document.getElementById("message").innerHTML = check(inp);
}
function decrement(){
    var inp = Number(document.getElementById("inp").value);
    inp -= 1;
    document.getElementById("inp").value = inp;
    document.getElementById("message").innerHTML = check(inp);
}

