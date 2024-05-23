let f = 1, fact = 1
while (f <= 7) {
    fact = fact * f
    f++;
}
document.querySelector("#fact").innerHTML = " Fact  : = " + fact;
