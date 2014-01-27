function check(operation){
        var inp = Number(document.getElementById("inp").value);
        if (isNaN(inp)){
            document.getElementById("message").innerHTML = "Input a number";
        }
        else{
            document.getElementById("message").innerHTML = "";
            if(operation === "increment"){
                inp += 1;
                isPrime(inp);
                document.getElementById("inp").value = inp;
            }
            else if(operation === "decrement"){
                inp -= 1;
                isPrime(inp);
                document.getElementById("inp").value = inp;
            }
        }
}
function isPrime(number){
    for(var i = 2; i < number; i++){
        if((number % i) === 0){
            document.getElementById("message").innerHTML = "It's not a prime number.";
            return;
        }
    }
    document.getElementById("message").innerHTML = "It's a prime number.";
}
function plus(){
        check("increment");
}
function minus(){
        check("decrement");
}

