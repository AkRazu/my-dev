var time = "01:02pm";
var bookPrice = 150;
var isWhiteColor = false;

// array
var partner = ["Sajib", "mojid", "khalid", "Rakib"];
var elementCount = partner.length;
var mojidIndex = partner.indexOf("karim");
partner.push("norin");
partner.pop();

// conditionals
if (bookPrice < 120) {
  console.log("I will buy this book ");
} else {
  console.log("Need some discount mama!");
}

// while loop
var i = 0;
while (i <= 17) {
  // do some work
  i++;
}

// for loop
for (var i = 0; i <= 17; i++) {
  // Do some Work
}

// function

function inMoonUp() {
  if (time > 19 && time <= 5) {
    return true;
  }
  return false;
}

var moonStatus = inMoonUp(21);

// let const

// value of variable could change
var price = 27;
price = 39;

// value of the variable will not change
let myName = "lal e lal mr. Helal ";
myName = 20;
console.log(myName);
