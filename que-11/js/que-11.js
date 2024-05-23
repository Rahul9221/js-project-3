let b;
let hyp = "";

for (b = 1; b <= 50; b++) {
    hyp += b;
    if (b < 50) {
        hyp += "-";
    }
}
document.getElementById("hypen").innerHTML = hyp;

