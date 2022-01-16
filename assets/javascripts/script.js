// Assignment code here

// Confirm password length

// Confirm lowercase
function setLowerCase() {
  var lowerCase = prompt("do you want lowercase characters in your password? Y or N?")
}

// Confirm uppercase
function setUpperCase() {
  var upperCase = prompt("do you want uppercase characters in your password? Y or N?")
}

// Confirm numeric
function setNumeric() {
  var numeric = prompt("do you want numeric characters in your password? Y or N?")
}

// Confirm special
function setSpecial() {
  var special = prompt("do you want special characters in your password? Y or N?")
}

// Confirm at least one type selected

// Generate password
function generatePassword() {
  setLowerCase();
  setUpperCase();
  setNumeric();
  setSpecial();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
