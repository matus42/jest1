function addition(a, b) {
    // Check if either of the inputs is not a number
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Invalid input';
    }
    
    return a + b;
}

module.exports = addition;