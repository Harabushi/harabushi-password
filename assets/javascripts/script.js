// Assignment code here

// Confirm password length
function setLength() {
  var passLength = prompt("How long would you like your password to be? (8-128 characters)")
  passLength = parseInt(passLength);
 
  return passLength;
}

// Confirm lowercase
function setLowerCase() {
  var lowerCase = confirm("Do you want lowercase characters in your password? Ok for Yes, Cancel for No.")

  return lowerCase;
}

// Confirm uppercase
function setUpperCase() {
  var upperCase = confirm("Do you want uppercase characters in your password? Ok for Yes, Cancel for No.")

  return upperCase;
}

// Confirm numeric
function setNumeric() {
  var numeric = confirm("Do you want numeric characters in your password? Ok for Yes, Cancel for No.")

  return numeric;
}

// Confirm special
function setSpecial() {
  var special = confirm("Do you want special characters in your password? Ok for Yes, Cancel for No.")
  
  return special;
}

// Confirm at least one type selected

// Generate password
function generatePassword() {
  var passLength = setLength();
  var lowerCase = setLowerCase();
  var upperCase = setUpperCase();
  var numeric = setNumeric();
  var special = setSpecial();

  console.log(passLength, lowerCase, upperCase, numeric, special)

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
