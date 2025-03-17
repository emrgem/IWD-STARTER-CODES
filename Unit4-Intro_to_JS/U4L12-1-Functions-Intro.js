// JavaScript Functions - Starter Code
// ================================

// Section 1: Functions Without Parameters
// ====================================

// Example: Simple greeting function
function sayHello() {
  console.log("Hello, welcome to the area calculator!");
}

// Try calling this function:
// sayHello();

// Exercise 1: Create a function without parameters
// Write a function that prints a specific rectangle's area (5x10)
function calculateSpecificRectangleArea() {
  // Your code here
}

// Try calling your function:
// calculateSpecificRectangleArea();


// Section 2: Functions With Parameters
// =================================

// Example: Rectangle area with parameters
function calculateRectangleArea(width, height) {
  let area = width * height;
  console.log("The area of the rectangle is: " + area + " square units");
}

// Try calling this function with different values:
// calculateRectangleArea(5, 10);
// calculateRectangleArea(7, 3);

// Exercise 2: Create a function with parameters
// Write a function that calculates and prints the area of a circle
function calculateCircleArea(radius) {
  // Your code here (hint: use Math.PI)
}

// Try calling your function with different radius values:
// calculateCircleArea(5);
// calculateCircleArea(7.5);


// Section 3: Functions That Return Values
// ===================================

// Example: Improved rectangle area function with return
function calculateRectangleAreaWithReturn(width, height) {
  let area = width * height;
  return area; // Return the value instead of printing it
}

// Try using this function and its return value:
// let area1 = calculateRectangleAreaWithReturn(5, 10);
// console.log("Area of rectangle: " + area1 + " square units");

// Exercise 3: Create a function that returns a value
// Modify your circle area function to return the area instead of printing it
function calculateCircleAreaWithReturn(radius) {
  // Your code here
}

// Try using your function and its return value:
// let circleArea = calculateCircleAreaWithReturn(5);
// console.log("Area of circle: " + circleArea + " square units");


// Section 4: Function Expressions
// ===========================

// Example: Rectangle area as a function expression
const rectangleAreaExpression = function(width, height) {
  return width * height;
};

// Try using this function expression:
// let area = rectangleAreaExpression(5, 10);
// console.log("Area using function expression: " + area + " square units");

// Exercise 4: Create a function expression
// Write a function expression that calculates the perimeter of a rectangle
const calculateRectanglePerimeter = function(width, height) {
  // Your code here
};

// Try using your function expression:
// let perimeter = calculateRectanglePerimeter(5, 10);
// console.log("Rectangle perimeter: " + perimeter + " units");
