const factorial = function (number) {
    //aqui escribiras tu codigo
    if(isNaN(number) || number<0){
        return 0;
    }
    let factorial = 0
    ///factorrial de 0 es 1
    if(number === 0){
        return 1;
    }
    ///multiplicar los valores anteriores del numero dado
    for(var x = 1;x<=number;x++){
        if(factorial === 0){
            factorial = x
        }else{
            factorial *= x
        }
    }
    return factorial
}; 

module.exports = factorial;
