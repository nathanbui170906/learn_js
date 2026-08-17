//          HÀM

// Có 3 cách khai báo hàm

// Function declaration
function sum1(a,b) {
    return a + b;
}
console.log(`${sum1(3,6)}`);

// Function expression
let sum2 = function(a,b) {
    return a + b;
};
console.log(`${sum2(2,4)}`);

// Arrow function
let sum3 = (a,b) => {
    return a + b;
};
console.log(`${sum3(4,7)}`);