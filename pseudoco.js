// Password Generator Pseudocode
function generatePassword() {
    //TODO: your code here
  ​
    // create variables
    // passwordLength
    // lowercase array
    var lowerAlphabet=["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x" ,"y", "z"];
    // uppercase array
    var uppercaseAlphabet=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // special characters array
    var symbols=["!", "#", "$", "%", "&", "*","+","-", ".", "/", ":",];
    // numbers array
    var numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0,]
    // variables for responses to confirms/prompts



    // create a variable that will hold the final password
  ​ 
    // Display a prompt asking the user for password length
    var passwordLength= prompt("How many characters would you like your passwoord to contain? ");
    // TODO: match edges cases - is a number && is >=8 , <=128




    // TODO: ensure that they answered true to at least on confirm
  confirmCharacters=confirm("Click OK to confirm including special characters ")
  confirmNumbers= confirm("Click OK to confirm including numeric characters ")
  confirmLower= confirm("Click OK to confirm including lowercase  characters ")
  confirmHigher= confirm("Click OK to confirm including  uppercase characters ")
  ​
    // display confirms for all different character types (listed in README)
  

  ​
    // check IF the user answered true to any of the confirms, add that array to the possible character array
  ​
  ​
    // want to create a loop for as long as passwordLength

    // for each iteration, select a random char out of the possible characters array and add it to the final password variable
  ​
    // return the final password from the generatePassword function
  ​
    return "extraSecretPassword"
  }