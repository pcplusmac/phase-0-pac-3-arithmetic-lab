function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function increment(a) {
    return a +=1;
}

function decrement(a) {
    return a -=1;
}

function makeInt(n) {
    let result = parseInt (n,10);
    return result;
}

function preserveDecimal(n) {
    let result = parseFloat (n);
    return result;
}