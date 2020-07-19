function createTaxCalculator (tax) {
    function calculateTax(amount) {

        return tax * amount;
    }
    return calculateTax;
}
const calculateNewTax  =  createTaxCalculator(0.25);
console.log(calculateNewTax(100));
console.log(calculateNewTax(500));
// CLOSURES
//A closure is a function that remembers its outer variables and can access them. In some languages, that’s not possible, or a function should be written in a special way to make it happen. But as explained above, in JavaScript, all functions are naturally closures
//A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables — a scope chain. The closure has three scope chains: it has access to its own scope — variables defined between its curly brackets. it has access to the outer function's variables.
//A closure is a function having access to the parent scope, even after the parent function has closed
// every function in javascript is a closure