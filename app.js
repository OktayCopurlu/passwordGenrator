const numberChars = "0123456789";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const specialChar = "-_";
const allCharacters = numberChars + upperChars + lowerChars + specialChar;

let inputUser = document.getElementById("user-input");
let result = document.getElementById("result");
let submitButton = document.getElementById("submit");
let password = "";

function getOneCharFromList(listOfCharacters) {
  return listOfCharacters.charAt(
    Math.floor(Math.random() * listOfCharacters.length)
  );
}

function createPassword() {
  let getNumberFromUser = inputUser.valueAsNumber;
  let passwordLength = getNumberFromUser;

  if (passwordLength < 8 || inputUser.value === "") {
    return (result.innerHTML = `<h3><span>You must type minumum 8</span></h3>`);
  } else {
    for (var i = 0; i < passwordLength - 2; ++i) {
      password += getOneCharFromList(allCharacters);
    }
    password += getOneCharFromList(specialChar);
    password += getOneCharFromList(numberChars);
    return (result.innerHTML = `<h3>Your new Password : <span>${password}</span></h3>`);
  }
}

submitButton.addEventListener("click", createPassword);
