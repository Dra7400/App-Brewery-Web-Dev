var ul = document.getElementById("fizzbuzzer");
for (var i = 1; i <= 100; i++, msg = "") {
  if (i % 15 == 0)
    msg = "fizzbuzz";
  else if (i % 3 == 0)
    msg = "fizz";
  else if (i % 5 == 0)
    msg = "buzz";
  else
    msg = "";
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(i + " = " + msg));
  li.setAttribute("class", msg);
  ul.appendChild(li);
}
