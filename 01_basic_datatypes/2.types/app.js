var userInput;
var userName;
userInput = 8;
userInput = "Pooooorrr";
// userName = userInput; //Type 'unknown' is not assignable to type 'string'.
// Use either
userName = userInput.toString();
// or
if (typeof userInput === "string") {
    userName = userInput;
}
// NEVER TYPE
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("This is an error by me!", 1700);
console.log({ result: result });
