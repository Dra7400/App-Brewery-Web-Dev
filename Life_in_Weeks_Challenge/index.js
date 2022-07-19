function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
  var yearsLeft;  
  var daysLeft; // x 365
    var weeksLeft; // y 52
    var monthsLeft; // z 12
    
  yearsLeft= 90- age;
    daysLeft= (90 - age) * 365;
    weeksLeft= (90 - age) * 52;
    monthsLeft= (90 - age) * 12;
    
    console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, " + monthsLeft + " months, and " + yearsLeft +" years left.");
    
/*************Don't change the code below**********/
}

lifeInWeeks(89);
