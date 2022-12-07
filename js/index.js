// Task - 1
document.write("<h3>This is created by Make a letter grade</h3>");
let mark = Number(prompt("Enter Your mark:"));
mark = parseInt(mark / 10);
switch (mark) {
  case 10:
  case 9:
  case 8:
    document.write("Congralutation! You have got A+");
    break;
  case 7:
    document.write("You have got A");
    break;
  case 6:
    document.write("You have got A-");
    break;
  case 5:
    document.write("You have got B");
    break;
  case 4:
    document.write("You have got C");
    break;
  default:
    document.write("Sorry! You have Failed!!.");
}

// End task 1
// task-2

document.write("<h3> Using for Loop. </h3>");
let i;
let j;
for (i = 1; i <= 8; i++) {
  for (j = 1; j <= 10; j++) {
    document.write(" " + i + "x" + j + "=" + i * j);
  }
  document.write("<br/> <br/>");
}
document.write("<h3> Using While Loop. </h3>");
i = 1;
while (i <= 8) {
  j = 1;
  while (j <= 10) {
    document.write(" " + i + "x" + j + "=" + i * j);
    j++;
  }
  document.write("<br/> <br/>");
  i++;
}
document.write("<h3> Using do while Loop. </h3>");
i = 1;
do {
  j = 1;
  do {
    document.write(" " + i + "x" + j + "=" + i * j);
    j++;
  } while (j <= 10);
  document.write("<br/> <br/>");
  i++;
} while (i <= 8);
// End task 2
// task-3
document.write("<h3> function showing addition. </h3>");
let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));
let num3 = Number(prompt("Enter the third number: "));
function addition(num1, num2, num3) {
  document.write(num1 + "+" + num2 + "+" + num3 + "=" + (num1 + num2 + num3));
}
function subraction(num1, num2, num3) {
  document.write(
    "<br/>" + num3 + "-" + num2 + "-" + num1 + "=" + (num3 - num2 - num1)
  );
}

function multiplication(num1, num2, num3) {
  document.write(
    "<br/>" + num3 + "*" + num2 + "*" + num1 + "=" + num3 * num2 * num1
  );
}
function division(num1, num2, num3) {
  document.write(
    "<br/>" +
      "(" +
      num3 +
      "/" +
      num2 +
      ")" +
      "/" +
      num1 +
      "=" +
      num3 / num2 / num1
  );
}
addition(num1, num2, num3);
subraction(num1, num2, num3);
multiplication(num1, num2, num3);
division(num1, num2, num3);
// End task 3
document.write("<h1>Thanks Mam, <br> Assalamualaikum!</h1>")
