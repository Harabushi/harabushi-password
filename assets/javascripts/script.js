// Assignment code here
var randomNum = function (min, max){
  var a = Math.floor(Math.random() * (max - min +1) + min)
  return a;
}

//var letterL = String.fromCharCode(randomNum(0x61, 0x7a))
//var letterU = String.fromCharCode(randomNum(0x41, 0x5a))
//var number = String.fromCharCode(randomNum(0x30, 0x39))
//var special = String.fromCharCode(randomNum(0x21, 0x2f))

//console.log(letterL, letterU, number, special)

// Confirm password length
function setLength() {
  debugger;
  var passLength = prompt("How long would you like your password to be? (8-128 characters)")
  passLength = parseInt(passLength);
  
  if (passLength > 7 && passLength < 129) {
    alert("Great choice!")  
  }
  
  else {
    alert("Invalid option! Please choose a number between 8 and 128")
    var passLength = setLength()
  }

  console.log(passLength)
  return passLength;
}

// User select char types
function setCharTypes() {
  chars = [];

  var lowerCase = confirm("Do you want lowercase characters in your password? Ok for Yes, Cancel for No.")
  if (lowerCase) {
    chars.push("lC");
  }

  var upperCase = confirm("Do you want uppercase characters in your password? Ok for Yes, Cancel for No.")
  if (upperCase) {
    chars.push("uC");
  }

  var numeric = confirm("Do you want numeric characters in your password? Ok for Yes, Cancel for No.")
  if (numeric) {
    chars.push("N");
  }

  var special = confirm("Do you want special characters in your password? Ok for Yes, Cancel for No.")
  if (special) {
    chars.push("S");
  }

    // Confirm at least one type selected
    while (chars.length === 0) {
      alert("You need to choose at least one type of character for your password.");
      setCharTypes()
    }
}

function lC () {
  var newchar = String.fromCharCode(randomNum(0x61, 0x7a))
  return newchar;
}

function uC () {
  var newchar = String.fromCharCode(randomNum(0x41, 0x5a))
  return newchar;
}

function N () {
  var newchar = String.fromCharCode(randomNum(0x30, 0x39))
  return newchar;
}

function S () {
  var newchar = String.fromCharCode(randomNum(0x21, 0x2f))
  return newchar;
}

// Generate password
function generatePassword() {
  var password = [];
  var passLength = setLength();
  setCharTypes();


  // console.log(passLength, lowerCase, upperCase, numeric, special)
  console.log(chars)
  // console.log(chars.length)

  for (var i = 0; i <passLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    var selector = chars[randomNumber];
    var newchar = eval(selector+"()")
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
