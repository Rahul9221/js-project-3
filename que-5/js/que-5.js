
let i = 0;
let j = 10;
let k;

while (i < 50) {
    document.write(i + "<br />");
    k = i + j;
    i = j;
    j = k;
}

