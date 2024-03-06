var userArray = [];
function signUp() {
  var userInput = prompt("Do you want to SignUp? (yes/no)");

  if (userInput.toLowerCase() === 'yes') {
    var userName = prompt("Enter your name:");

    
    userArray.push(userName);
    console.log("Usernames Array:", userArray);
  } else {
    console.log("SignUp cancelled.");
  }
}
signUp();