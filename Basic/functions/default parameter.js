function calculateBill(amount, taxRate = 0.13) {
    return amount + amount * taxRate;
}

console.log(calculateBill(100));
console.log(calculateBill(100, 0.2));
