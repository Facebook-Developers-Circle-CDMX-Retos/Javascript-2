const factorial = function (number) {
    if(number < 0) return 0;
    if(number == 0 || number == 1) return 1;
    
    let oddNumber, aux;

    if(number % 2 != 0) {
        aux = number;
        oddNumber = number - 1;
    } else {
        aux = 1;
        oddNumber = number;
    }

    let res = 1;

    for(let i = 1; i <= oddNumber / 2; i++){
        res *= i * (oddNumber + 1 - i);
    }

    return res * aux;

};

module.exports = factorial;