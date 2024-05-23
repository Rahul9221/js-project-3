
let number = 21;
let prim = 1;
let prime= document.getElementById("que-6");

while (prim < number) {
    if (number % prim == 0) {
        prime.innerHTML += (`${number} prime not a number <br/>`);
        break;
    }
    else {
        prime.innerHTML += (`${number} prime number <br/>`);
    }
    prim++;
}