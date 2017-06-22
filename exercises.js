//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  //code here
  var timesTen = num * 10;
  return timesTen;
}

function subtractFive(num) {
  //return num after subtracting five
  //code here
  var minusFive = num - 5;
  return minusFive;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  //code here
  var sameLength = str1.length === str2.length;
  return sameLength;
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  //code here
  var equal = x === y;
  return equal;
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  //code here
  var belowNinty = num < 90;
  return belowNinty;
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  //code here
  var overFifty = num > 50;
  return overFifty;
}

function add(x, y) {
  //add x and y together and return the value
  //code here
  var addNums = x + y;
  return addNums;
}

function subtract(x, y) {
  //subtract y from x and return the value
  //code here
  var subNum = x - y;
  return subNum;
}

function divide(x, y) {
  //divide x by y and return the value
  //code here
  var divNum = x / y;
  return divNum;
}

function multiply(x, y) {
  //multiply x by y and return the value
  //code here
  var mulNum = x * y;
  return mulNum;
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  //code here
  var rem = x % y;
  return rem;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  //code here
  var even = num % 2 === 0;
  return even;
}

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  //code here
  var odd = num % 2 != 0;
  return odd;
}

function square(num) {
  //square num and return the new value
  //code here
  var square = Math.pow(num,2);
  return square;
}

function cube(num) {
  //cube num and return the new value
  //code here
  var cube = Math.pow(num,3);
  return cube;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  //code here
  var raise = Math.pow(num,exponent);
  return raise;
}

function roundNumber(num) {
  //round num and return it
  //code here
  var round = Math.round(num);
  return round;
}

function roundUp(num) {
  //round num up and return it
  //code here
  var roundUp = Math.ceil(num);
  return roundUp;
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
  var newStr = str + '!';
  return newStr;
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
  var fullName = firstName + ' ' + lastName;
  return fullName;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
  var greeting = 'Hello ' + name + '!';
  return greeting;
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  //code here
  var area = length * width;
  return area;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  //code here
  var triArea = (base * height) / 2;
  return triArea;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  //code here
  var pi = Math.PI;
  var radiusSqrd = Math.pow(radius,2);
  var cirArea = Math.round(pi * radiusSqrd);
  return cirArea;
}

function getRectangularPrismVolume(length, width, height) {
  //return the volume of the 3D rectangular prism given the length, width, and height
  //code here
  var volume = length * width * height;
  return volume;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
