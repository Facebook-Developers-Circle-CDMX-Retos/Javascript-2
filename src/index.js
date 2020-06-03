const factorial = function (number) {
    //aqui escribiras tu codigo
    if(!isNaN(number) || number<0){
        return 0;
    }
    let factorrial = 0
    ///factorrial de 0 es 1
    if(number === 0){
        return 1;
    }
    ///multiplicar los valores anteriores del numero dado
    for(var x = 1;x<=number;x++){
        if(factorrial === 0){
            factorrial = x
        }else{
            factorrial *= x
        }
    }
    return factorrial
}; 

module.exports = factorial;
