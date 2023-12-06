//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
function greaterThan25(x) {
  if (x >= 25) {
    return true;
  } else {
    return false;
  }
}
console.log(numbers.filter(greaterThan25));

function divBy5(x) {
  if (x % 5 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(numbers.filter(divBy5));

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
function squared(x) {
  return x * x;
}
console.log(numbers.map(squared));

function double(x) {
  return x * 2;
}
console.log(numbers.map(double));
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
function greaterThan20(x) {
  if (x >= 20) {
    return true;
  } else {
    return false;
  }
}
console.log(numbers.filter(greaterThan20).map(squared));

function mutlBy3(x) {
  return x * 3;
}
console.log(numbers.filter(divBy5).map(mutlBy3));
