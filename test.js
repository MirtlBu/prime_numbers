function check(operation){
    var get_message = document.getElementById("message");
    var get_input = document.getElementById("inp");
    var inp = Number(get_input.value);
    if (isNaN(inp)){
        get_message.innerHTML = "Input a number";
    }
    else{
        get_message.innerHTML = "";
        if(operation === "increment"){
            inp += 1;
            get_input.value = inp;
            if(isPrime(inp) && isPositive(inp)){
                get_message.innerHTML = "It's a prime number.";
            }
            else{
                get_message.innerHTML = "It's not a prime number.";
            }
        }
        else if(operation === "decrement"){
            inp -= 1;
            get_input.value = inp;
            if(isPrime(inp) && isPositive(inp)){
                get_message.innerHTML = "It's a prime number.";
            }
            else{
                get_message.innerHTML = "It's not a prime number.";
            }
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
function plus(){
    check("increment");
}
function minus(){
    check("decrement");
}

