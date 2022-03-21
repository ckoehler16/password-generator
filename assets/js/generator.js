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

// Function to Generate Password
function writePassword() {
  // asks how long the user wants the password to be
  enter = parseInt(prompt("How many characters would you like your password to be? Please choose between 8 and 128 characters"));
  // need to validate user's input
  if (!enter) {
    alert("This needs a value.");
  } else if (enter < 8 || > 128) {
    // validates user's input and starts input prompts
    enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {
    // only continues if user's input is validated
    confirmNumber = confirm("Will this password contain numbers?");
    confirmSpecialCharacter = confirm("Will this password contain special characters?");
    confirmUppercase = confirm("Will this password contain Uppercase letters?");
    confirmLowercase = confirm("Will this password contain Lowercase letters?");
  };

  // else if for some negative options
  if (!confirmSpecialCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a password criteria!");
  }
  // else if for 4 positive options
  else if (confirmSpecialCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
    choices = character.concat(number,alpha,alpha2);
  }
  // else if for 3 positive options
  else if (confirmSpecialCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
  }
  else if (confirmSpecialCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  }
  else if (confirmSpecialCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
  }
  // else if for 2 positive options 
  else if (confirmSpecialCharacter && confirmNumber) {
    choices = character.concat(number);

  } else if (confirmSpecialCharacter && confirmLowercase) {
    choices = character.concat(alpha);

  } else if (confirmSpecialCharacter && confirmUppercase) {
    choices = character.concat(alpha2);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);

  } else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
  }
  // else if for 1 positive option
  else if (confirmSpecialCharacter) {
    choices = character;
  }
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmLowercase) {
    choices = alpha;
  }
  // created a space variable to fill uppercase conversion
  else if (confirmUppercase) {
    choices = space.concat(alpha2);
  };
  // password variable is a placeholder for a user generated amount of length array
  var password = [];

  // random selection for all the variables
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  // joins the password array and converts it to a string (spent a lot of time on google)
  var pw = password.join("");
  UserInput(pw);
  return pw;
}
