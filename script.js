//Variables
var charBank = {
  lowerCase: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  upperCase: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
special: [
    "!",
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    " < ",
    "=",
    " > ",
    " ? ",
    "@",
    "[",
    "\\",
    "]",
    " ^ ",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ],
  numbers: ['0','1','2','3','4','5','6','7','8','9']
};

var includeLower = confirm("Would you like to use lower-case letter?");
var includeUpper = confirm("Would you like to use upper-case letters?");
var includeSpecial = confirm("Would you like to include special charcters?");



function makePassword(){
  var password = generatePassword();
  var passwordChar = document.querySelector("#password");
  passwordChar.value = password;
}

function generatePassword(){
  var passwordLength = prompt("Please choose a password length between 8 and 128 charcters");

  if (passwordLength<7 || passwordLength>129){
  alert("Please choose a password length between 8 and 128 charcters");
  return "Invalid";
}}






// var charBank = []
// if(includeLower){
//   return(charBank.lowerCase)
// }
// console.log(charBank)



//   for (var i = 0; i < passwordLength; i++);
//   //generate a number
//   var randomNumber = Math.floor(Math.random() * charBank.length)
// var newChar =charBank[randomNumber]
// password = password + newChar
//   //function used to choose special characters


// // Assignment code here
// var passwordLength;
// var password = "";
// var confirmLower;
// var confirmUpper;
// var confirmSpecial;
// var confirmNumber;

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// var password = document.getElementById("password");