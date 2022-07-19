name = prompt ("What is your name");
len = name.length;
first = name.slice(0,1);
first = first.toUpperCase();
rest = name.slice(1,len);
rest = rest.toLowerCase();
alert ("Hello " + first + rest);
