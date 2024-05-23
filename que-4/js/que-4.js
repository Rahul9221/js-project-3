let pame = 121;
let temp = pame;
let palin = document.getElementById("que-4");
let revs = 0;

while (temp > 0) {
    let digit = temp % 10;
    revs = revs * 10 + digit;
    temp = parseInt(temp / 10);
}
if (pame == revs) {
    palin.innerHTML = (`${pame} palindroma number`);
} else {
    palin.innerHTML = (`${pame}  palindroma not a number`);
}


