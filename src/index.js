const factorial = function (number) {
    if(number < 0) return 0
    if(number === 0 || number === 1) return  1;
    let result = number;
    while (number > 1) { 
        number--;
        result *= number;
    }
    return result;
}; 

module.exports = factorial;