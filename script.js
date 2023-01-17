// Variables 
var generateBtn = document.querySelector("#generate");
var choiceArray = [];
var characterLength = 8;
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacters = ['!', '@', '#', "$", "&", '*'];

// Script to Generate Password

function writePassword() {
  var truePrompt = getPrompts();
  var passwordText = document.querySelector("#password");

  if (truePrompt) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }

}

//  Loop responsponding to Prompts 

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}

// Prompts

function getPrompts() {

  choiceArray = [];

  characterLength = parseInt(prompt("How long would you like your password to be? Please choose between 8 - 128 characters"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Password length must be between 8 - 128 characters. Please re-enter now");
    return false;
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArray = choiceArray.concat(upperCase);
  }
  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArray = choiceArray.concat(lowerCase);
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceArray = choiceArray.concat(numbers);
  }
  if (confirm("Would you like special characters in your password?")) {
    choiceArray = choiceArray.concat(specialCharacters);
  }
  return true;
}

// Event listener for generate button
generateBtn.addEventListener("click", writePassword);
