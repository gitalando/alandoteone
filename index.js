// Helper function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
  }
  
  // Helper function to check if a number is even
  function isEven(num) {
    return num % 2 === 0;
  }
  
  // Helper function to check if a number is odd
  function isOdd(num) {
    return !isEven(num);
  }
  
  // Helper function to capitalize the first letter of a string
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Testing the helper functions
  console.log(calculateTriangleArea(3, 4)); // Output: 6 (for a triangle with base=3 and height=4)
  console.log(isEven(7)); // Output: false
  console.log(isOdd(8)); // Output: false
  console.log(capitalizeFirstLetter("hello")); // Output: "Hello"
  