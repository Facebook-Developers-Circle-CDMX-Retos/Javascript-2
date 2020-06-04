const factorial = function (number) {
  if (number === 0 || number === 1) return 1;
  if (number < 0) return 0;
  for (var i = number - 1; i >= 1; i--) {
    number *= i;
  }
  return number;
};

module.exports = factorial;
