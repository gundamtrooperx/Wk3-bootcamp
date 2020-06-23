// Assignment Code
//assigning the button to prompt question when clicked

document.querySelector("#generate").addEventListener("click", writePassword);

//Array variables
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "="];

//Declaration and intialization of variables

let confirmLength = "";
let confirmSymbol;
let confirmNumber;
let confirmUpper;
let confirmLower;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  const confirmLength = (prompt("How many characters would you like your password to contain?"));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      let confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

      // Repeat back how many characters the user will have  
        alert('Your password will have ' + confirmLength + ' characters');
        
        // function getGender() {
        //   do {
        //     var yourGender = prompt('Enter your gender (M / F)').toLowerCase();
        //   } while (yourGender !== 'm' && yourGender !== 'f');
        
        //   return yourGender;
        // }

    
    // Determine parameters of password 
    let confirmSymbol = confirm("Click OK to confirm if you would like to include symbol characters");
    let confirmNumber = confirm("Click OK to confirm if you would like to include numeric characters");    
    let confirmLower = confirm("Click OK to confirm if you would like to include lowercase characters");
    let confirmUpper = confirm("Click OK to confirm if you would like to include uppercase characters");
      // Loop if answer is outside the parameters 
      while(confirmUpper === false && confirmLower === false && confirmSymbol === false && confirmNumber === false) {
        alert("You must choose at least one parameter");
        let confirmSymbol = confirm("Click OK to confirm if you would like to include symbol characters");
        let confirmNumber = confirm("Click OK to confirm if you would like to include numeric characters");    
        let confirmLower = confirm("Click OK to confirm if you would like to include lowercase characters");
        let confirmUpper = confirm("Click OK to confirm if you would like to include uppercase characters");   
    } 

      // Assign an action to the password parameters NEED TO FIX THIS
      let passwordCharacters = []
      
    if (confirmSymbol) {
      passwordCharacters = passwordCharacters.concat(symbol)
    }

    if (confirmNumber) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLower) {
      passwordCharacters = passwordCharacters.concat(lower)
    }

    if (confirmUpper) {
      passwordCharacters = passwordCharacters.concat(upper)
    }

      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (let i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}