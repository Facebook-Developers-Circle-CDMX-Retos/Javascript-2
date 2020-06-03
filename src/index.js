const factorial = function (number) {
    if(number < 0) return 0;
        let res = 1;
    for(let i = 2; i<=number; i++) res *= i;
        return res;
}; 

module.exports = factorial;
