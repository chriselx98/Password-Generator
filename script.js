// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

var options = ["Y", "N"];
start = start.toUpperCase();
var start = window.prompt("Would you like to create a new password? (Y/N)")
var secondOption = window.prompt('How many characters would you like your password to be?'); 

if (start  == options[0]) {
  secondOption;
} else {
  return;
}

var length = " ";
var lowerCase = window.prompt('Would you like your passowrd to include lowercase letters?');
var upperCase = window.prompt('Would you like your passowrd to include uppercase letters?');
var numeric = window.prompt('Would you like to include numbers?');
var special = window.prompt('Would you like to include special characters?');

if (length.length > 8 ){
  newLength = length.substring(8,128);

} 



  passwordText.value = password;

   
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
