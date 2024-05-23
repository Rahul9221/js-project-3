let display = " ";
let pattern = document.getElementById("que-14");
let number = 1;

for (let k = 1; k <= 5; k++) {

    for (let b = 1; b <= k; b++) {
        display += number + " ";
        number++;
    }
    display += "<br>"
}
pattern.innerHTML = (display);


