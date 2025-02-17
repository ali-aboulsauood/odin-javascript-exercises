const convertToCelsius = function(tempInFahrenheit) {
  const tempInCelsius = (tempInFahrenheit - 32) * (5 / 9);

  // The method `Number.toFixed` returns a String.
  return +tempInCelsius.toFixed(1);
};

const convertToFahrenheit = function(tempInCelsius) {
  const tempInFahrenheit = tempInCelsius * (9 / 5) + 32;

  // The method `Number.toFixed` returns a String.
  return +tempInFahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
