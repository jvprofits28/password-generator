// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

const symbols = "!#$%&*+-./@(^):";
const numbers = "1234567890";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

// this function gather user preference on password 
function createOptions() {
  const passwordLength = parseInt(prompt("How many characters would you like your password to contain?(you must choose more than 8 characters or less than 100!)"));
  if (passwordLength < 8){
    alert("you must choose more than 8 characters")
  } else if (passwordLength > 100) {
    alert("you must choose less than 100 characters!")
  }
  const confirmLower = confirm("Click OK to confirm including lowercase  characters ");
  const confirmHigher = confirm("Click OK to confirm including  uppercase characters ");
  const confirmCharacters = confirm("Click OK to confirm including special characters ");
  const confirmNumbers = confirm("Click OK to confirm including numeric characters ");

  let options = {
    passwordLength,
    confirmLower,
    confirmHigher,
    confirmCharacters,
    confirmNumbers
  };

  return options;
}
//this function generates password by gathering user preference
function generatePassword(){
  let options = createOptions();
  let validChars = '';

  if (options.confirmLower) {
    validChars += lowerCase;
  }

  if (options.confirmHigher) {
    validChars += upperCase;
  }

  if (options.confirmCharacters) {
    validChars += symbols;
  }

  if (options.confirmNumbers){
    validChars += numbers;
  }
  // create a storage container for selected characters
  let password = [];
  // for loop to iterate for n times
  for (let i = 0; i < options.passwordLength; i += 1){
    // select a random character from validChars
    // push the random character into our storage
    password.push(validChars[Math.floor(Math.random() * validChars.length)]);
  }
  // join all our characters together
  return password.join('');
  // return password which is our container joined together
}
//to this section 
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

