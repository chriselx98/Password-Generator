// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeric: '0123456789',
  special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
};

// Write password to the #password input
function writePassword() {
  //  var password = generatePassword();
  //  var passwordText = document.querySelector("#password");
  //  passwordText.value = password;

var length = "";

var prompt1 = Number(prompt("How many characters would you like your password to be (Between 8-128)?"));


if (confirm("would you like lowercase?") == true) {
  length += characters.lowercase;
} else if (confirm("would you like uppercase?") == true) {
  length += characters.uppercase;
};

if (confirm("would you like symbols?") == true) {
  length += characters.special;
};

if (confirm("would you like numbers?") == true) {
  length += characters.numeric;
};




}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
