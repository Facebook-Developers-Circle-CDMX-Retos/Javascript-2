const factorial = function (number) {
    if (number < 0) { 
        return 0;
    }
    if (number === 0) {
        return 1;
    }
	let result = number;
	for (let n = number - 1; n > 0; n--) {
		result *= n;
	}

	return result;
};

module.exports = factorial;