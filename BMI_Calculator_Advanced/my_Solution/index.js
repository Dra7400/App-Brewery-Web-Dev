function bmiCalculator(weight,height) {
    return Math.round(weight/(height*height));
    
}
//The excercise specifically says you do not need to include any alerts
//or prompts. So the function is all that is needed. The code below this 
//was for my satisfaction only. 
var bmi = bmiCalculator(65,1.8);
alert("Your BMI is approximately " + bmi )
