var output = [];

function fizzbuzz() {
    for (var count=1; count < 101; count++){
        if (count % 3 === 0&& count % 5 === 0){
            output.push("fizzbuzz");
        } else if (count % 3 === 0) {
            output.push("fizzbuzz");
        } else if (output % 5 === 0){
            output.push("Buzz");
        } else {
            output.push(count);
        }
    }
    console.log(output);
}
