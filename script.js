// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");
 //special characters
 var symbols=["!", "#", "$", "%", "&", "*","+","-", ".", "/", ":",];
 //numbers array
 numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0,]
 //uppercases array
 uppercaseAlphabet=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 // lowercase array
 lowerAlphabet=["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x" ,"y", "z"];

//array
array=[]
 //oblean for confirm windows 
var password= "false"
var special="false"
var upper="false"
var lower="false"
// get user opinion for passworwd characters preference
  passwordLength= prompt("How many characters would you like your password to contain? ");
  confirmLower= confirm("Click OK to confirm including lowercase  characters ")
  confirmHigher= confirm("Click OK to confirm including  uppercase characters ")
  confirmCharacters=confirm("Click OK to confirm including special characters ")
  confirmNumbers= confirm("Click OK to confirm including numeric characters ")

  
function generatePassword(){
  if(passwordLength)



 return "extraSecretPassword"
}

// Write password to the #password input
/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button





// DO NOT CHANGE THIS CODE
generateBtn.addEventListener("click", writePassword);

