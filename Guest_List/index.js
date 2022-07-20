var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
console.log(guestList[0]);
var name = prompt("What is your name?");
if (guestList.includes(name)) {
    alert("Welcome to the party.");
}
else{
    alert("I am sorry, your name is not on the guest list.");
}
