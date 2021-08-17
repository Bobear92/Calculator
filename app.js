// global variables
let heldValue = null;
let heldOperation = null;
let nextValue = null;

// functions
$(".digits button").click(function () {
  if (nextValue === null) {
    nextValue = "0";
  }
  num = $(this).text();
  nextValue += num;
  updateDisplay();
});

function showValue(location, value) {
  if (value === null) {
    $(location).text("");
  } else {
    $(location).text(Number(value));
  }
}
updateDisplay();

function updateDisplay() {
  showValue(".held-value", heldValue);
  showValue(".next-value", nextValue);
}

$(".clear-all").click(function () {
  heldValue = null;
  heldOperation = null;
  nextValue = null;
  updateDisplay();
  $(".next-operation").text("");
});

$(".clear-entry").click(function () {
  nextValue = null;
  updateDisplay();
  $(".next-operation").text("");
});

// math functions

function add(x, y) {
  return Number(x) + Number(y);
}

function subtract(x, y) {
  return Number(x) - Number(y);
}

function multiply(x, y) {
  return Number(x) * Number(y);
}

function divide(x, y) {
  return Number(x) / Number(y);
}

function setHeldOperation(operation) {
  if (heldOperation !== null) {
    heldValue = heldOperation(heldValue, nextValue);
  } else if (nextValue !== null && !heldOperation) {
    heldValue = nextValue;
  }

  nextValue = null;
  heldOperation = operation;
}

$(".add").click(function () {
  setHeldOperation(add);
  $(".next-operation").text("+");
  updateDisplay();
});

$(".subtract").click(function () {
  setHeldOperation(subtract);
  $(".next-operation").text("-");
  updateDisplay();
});

$(".multiply").click(function () {
  setHeldOperation(multiply);
  $(".next-operation").text("*");
  updateDisplay();
});

$(".divide").click(function () {
  setHeldOperation(divide);
  $(".next-operation").text("/");
  updateDisplay();
});

$(".equals").click(function () {
  setHeldOperation(null);
  $(".next-operation").text("");
  updateDisplay();
});
