function calculateTax(amount) {
    let taxValue = amount * 0.1;
    return taxValue;
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function isPalindrome(word) {
    if (word === word.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const price = originalPrice - discountPercentage;
    return price;
}
let discountedPrice = calculateDiscountedPrice(100, 20);
console.log(discountedPrice);




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };