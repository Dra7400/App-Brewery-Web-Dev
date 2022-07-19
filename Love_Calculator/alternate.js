var name1 = prompt("Please enter a name.");
var name2 = prompt("Please enter the name of the love interest of that person.");

var loveScore = Math.random();
loveScore*=100
loveScore = Math.floor(loveScore)+1;

if(loveScore ===100) {
  alert("Your love score is " + loveScore + "% " + "You love each other like Kanye loves Kanye.");
} 
else{
  alert("Your love score is " + loveScore + "%.");
}
