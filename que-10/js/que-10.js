let f = 1;

do {
    if (f % 3 === 0 && f % 50 === 0) {
        console.log("FizzBuzz");
    } else if (f % 5 === 0) {
        console.log("Fizz");
    } else if (f % 10 === 0) {
        console.log("Buzz");
    } else {
        console.log(f);
    }
    f++;
} while (f <= 10);

