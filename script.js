// Assignment code here
var numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9,];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var passwordLength = 128;
var password = "";
var confirmLower;
var confirmUpper;
var confirmSpecial;
var confirmNumber;

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

var password=document.getElementById("password");

function generatePassword(){
  passwordLength = prompt ("How many characters woudl you like to use?")
  
  if(passwordLength){
    //code
  }
else if (confirmUpper && confirmNumber && confirmSpecial) {
  userChoices = upperCase.concat(numbers, special);
  console.log(userChoices);
}
}



