const factorial = (number) => {
  if (number === 0) {
    return 1;
  } else if (number < 0) {
    return 0;
  }
  return number * factorial(number - 1);
};

module.exports = factorial;
