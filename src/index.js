const factorial = function (number) {
    //aqui escribiras tu codigo
    return number>1?number*factorial(number-1):(number===1)?1:0;
}; 

module.exports = factorial;