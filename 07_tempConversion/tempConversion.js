const ftoc = function(fahrenheit) {
  return parseFloat(((fahrenheit-32)*5/9).toFixed(1));

};

const ctof = function(celcius) {
  return parseFloat(((celcius*9+32*5)/5).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
