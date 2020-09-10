let Year = parseInt(prompt('Enter the year'));

let isLeapYear = false;

let isDivisibleBy4 = Year % 4 == 0;
if (isDivisibleBy4) {
    let isDivisibleBy100 = Year % 100 == 0;
    if (isDivisibleBy100) {
        let isDivisibleBy400 = Year % 400 == 0;
        if (isDivisibleBy400) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
    }
}

if (isLeapYear) {
    alert(Year + " is a leap year");
} else {
    alert(Year + " is NOT a leap year");
}