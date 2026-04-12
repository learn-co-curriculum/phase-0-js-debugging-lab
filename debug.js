const calculateDiscountedPrice = require('./discountCalculator');

console.log(calculateDiscountedPrice(5, 20)); // should be 100
console.log(calculateDiscountedPrice(10, 20)); // should be 180