const factorial = function (number) {
    let res = 1;
    if (number == 0 || number == 1)
        return 1;
    if (number < 0 )
        return 0;
    else
        for (var i = 2; i <= number; i++) {
            res *= i;
        }
    return res;
};

module.exports = factorial;