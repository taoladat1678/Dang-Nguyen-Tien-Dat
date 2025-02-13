
// Method 1: Use a for loop to calculate the sum of numbers from 1 to n.
var sum_to_n_a = function(n) {
    let sum = 0;
    let expression = [];
    for (let i = 1; i <= n; i++) {
        sum += i;
        expression.push(i);
    }
    console.log(`sum_to_n(${n}) === ${expression.join(" + ")} === ${sum}`);
    return sum;
};

// Method 2: Use a mathematical formula.

var sum_to_n_b = function(n) {
    let sum = (n * (n + 1)) / 2;
    let expression = Array.from({ length: n }, (_, i) => i + 1).join(" + ");
    console.log(`sum_to_n(${n}) === ${expression} === ${sum}`);
    return sum;
};

// Method 3: Use Array.reduce().

var sum_to_n_c = function(n) {
    let sum = Array.from({ length: n }, (_, i) => i + 1)
                  .reduce((acc, num) => acc + num, 0);
    console.log(`sum_to_n(${n}) === ${Array.from({ length: n }, (_, i) => i + 1).join(" + ")} === ${sum}`);
    return sum;
};


// Test cases
sum_to_n_a(5);
sum_to_n_b(6);
sum_to_n_c(7);
