function bmiCalculator(weight, height){
  var bmi = weight / Math.pow(height, 2);
  return Math.round(bmi);
}
