// Assignment code here
var chars = [];
var randomNum = function (min, max){
  var a = Math.floor(Math.random() * (max - min +1) + min)
  return a;
}

var letterL = String.fromCharCode(randomNum(0x61, 0x7a))
var letterU = String.fromCharCode(randomNum(0x41, 0x5a))
var number = String.fromCharCode(randomNum(0x30, 0x39))
var special = String.fromCharCode(randomNum(0x21, 0x2f))

console.log(letterL, letterU, number, special)

// Confirm password length
function setLength() {
  var passLength = prompt("How long would you like your password to be? (8-128 characters)")
  passLength = parseInt(passLength);
  
  if (passLength > 7 && passLength < 129) {
    return passLength;
  }
  
  else {
    alert("Invalid option! Please choose a number between 8 and 128")
    setLength()
  }
}

// Confirm lowercase
function setLowerCase() {
  var lowerCase = confirm("Do you want lowercase characters in your password? Ok for Yes, Cancel for No.")
  if (lowerCase) {
    chars.push("1");
  }
  //return lowerCase;
}

// Confirm uppercase
function setUpperCase() {
  var upperCase = confirm("Do you want uppercase characters in your password? Ok for Yes, Cancel for No.")
  if (upperCase) {
    chars.push("2");
  }
  //return upperCase;
}

// Confirm numeric
function setNumeric() {
  var numeric = confirm("Do you want numeric characters in your password? Ok for Yes, Cancel for No.")
  if (numeric) {
    chars.push("3");
  }
  //return numeric;
}

// Confirm special
function setSpecial() {
  var special = confirm("Do you want special characters in your password? Ok for Yes, Cancel for No.")
  if (special) {
    chars.push("4");
  }
  //return special;
}

// Generate password
function generatePassword() {
  var password = [];
  passLength = setLength();
  //var lowerCase = 
  setLowerCase();
  //var upperCase = 
  setUpperCase();
  //var numeric = 
  setNumeric();
  //var special = 
  setSpecial();

  // Confirm at least one type selected
  while (chars.length === 0) {
    alert("You need to choose at least one type of character for your password.");
    //var lowerCase = 
    setLowerCase();
    //var upperCase = 
    setUpperCase();
    //var numeric = 
    setNumeric();
    //var special = 
    setSpecial();
  }

  // if (lowerCase) {
  //   chars.push("a","b","c","e","d","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
  // }

  // if (upperCase) {
  //   chars.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
  // }

  // if (numeric) {
  //   chars.push("1","2","3","4","5","6","7","8","9","0");
  // }

  // if (special) {
  //   chars.push("!","@","#","$","%","^","&","*","(",")");
  // }

  // console.log(passLength, lowerCase, upperCase, numeric, special)
  console.log(chars)
  // console.log(chars.length)

  for (var i = 0; i <passLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    var newchar = chars[randomNumber];
    password += newchar;
    // console.log(randomNumber)
  }

  return password;
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
