const factorial = function (number) {
    if (number<=0) return 0;
    let result = 1;
    for (let index = 1; index <= number; index++) {
        result*=index;
    }
    return result;
}; 

module.exports = factorial;