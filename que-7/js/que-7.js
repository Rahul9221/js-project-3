let no = 2;
let copyNo = no;
let sum = no;

while (copyNo > 9) {
    sum = 0;
    while (copyNo > 0) {
        sum += copyNo % 10;
        copyNo = parseInt(copyNo / 10);
    }
    copyNo = sum;
}
if (sum == 1) {

    document.getElementById("yes").innerHTML = `${no} is a Magic number`;
} else {
    document.getElementById("no").innerHTML = `${no} is not Magic number`;
}