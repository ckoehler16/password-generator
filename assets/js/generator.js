// Start Working Code //

// Input Variables //
var enter;
var confirmNumber;
var confirmSpecialCharacter;
var confirmUppercase;
var confirmLowercase;

// Password Variable Values //
// special characters //
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// numeric characters
number = [0,1,2,3,4,5,6,7,8,9];
// alphabetical characters
alpha =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// space needed for the uppercase conversion
space = [];
// 'choices' declared outside the 'if' statement so they can be concatenated up conditions
var choices;
// var converts letter to uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};
// creates a var for uppercase conversion
alpha2 = alpha.map(toUpper);

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
  pw = writePassword();
  document.getElementById("password").placeholder = pw;
});