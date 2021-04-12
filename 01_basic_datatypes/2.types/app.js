function add(n1, n2, showResult, phrase) {
    if (showResult === true) {
        console.log(phrase + (n1 + n2));
    }
    return n1 + n2;
}
var number1 = 7;
var number2 = 2;
var printResult = true;
var resultPhrase = 'Result is: ';
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
