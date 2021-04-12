let userInput: unknown;
let userName: string;

userInput = 8;
userInput = "Pooooorrr";

// userName = userInput; //Type 'unknown' is not assignable to type 'string'.
// Use either
userName = userInput.toString();
// or
if (typeof userInput === "string") {
  userName = userInput;
}
