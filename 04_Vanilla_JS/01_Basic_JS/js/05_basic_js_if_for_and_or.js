// if function
if (10 > 5) {
  console.log("hi");
} else {
  console.log("ho");
}

if ("10" === 10) {
  console.log("no");
} else {
  console.log("nope");
}

// &&: all condition has to be 'true'
if (20 > 5 && "kyd" === "kyd") {
  console.log("yes");
} else {
  console.log("no");
}

// ||: just one condition has to be 'true'
if (20 > 5 || "kyd" === "ky") {
  console.log("yes");
} else {
  console.log("no");
}

// Resently don't use 'prompt' because it is old version code.
const age = prompt("How old are you?");
console.log(age);

const age = prompt("How old are you?");
if (age > 18) {
  console.log("you can drink!");
} else {
  console.log("you can't do that!");
}

const age = prompt("How old are you?");
if (age >= 18 && age <= 21) {
  console.log("you can drink but you should not!");
} else if (age > 21) {
  console.log("go ahead");
} else {
  console.log("too young");
}
