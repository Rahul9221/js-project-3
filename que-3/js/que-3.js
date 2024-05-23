let a = 303;
let b = 0;
let c = a;
let yes = "number is an Armstrong number"
let no = "number is not an Armstrong number"

while (c > 0) {
    let d = c % 10;
    b += d ** 3;
    c = parseInt(c / 10);
}
document.getElementById("a").innerHTML = a;
if (b == a) {
    document.querySelector("h2").innerHTML = yes;
} else {
    document.querySelector("h2").innerHTML = no;
}