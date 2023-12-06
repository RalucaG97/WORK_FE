//get items from the local storage if they are any
// function eventForTextInput(element){
//     element.addEventListener('input',(e)=>{
//         const nameAtribute = e.target.getAttribute('name');
//         accounts[nameAtribute]=e.target.value
//     })
// }
// signin.addEventListener('click', (e)=>{
//     localStorage.getItem('credentials');
//     const user = document.querySelectorAll('input');
//     const submit = document.querySelectorAll("[type='submit']");
// })

const accounts = {
  username: "",
  password: "",
};

var check = "";

console.log("alooooo");

const inputList = document.querySelectorAll("input");

console.log(inputList);

const buttonSignUp = document.getElementById("buttonSignUp");
const buttonSignIn = document.getElementById("buttonSignIn");

inputList.forEach((input) => {
  const classes = input.classList;
  if (classes.contains("SignIn")) {
    if (input.getAttribute("id") == "nameSignIn") {
      input.addEventListener("input", (user) => {
        accounts.username = user.target.value;
      });
    } else if (input.getAttribute("id") == "passSignIn") {
      input.addEventListener("input", (password) => {
        accounts.password = password.target.value;
      });
    }
  } else if (classes.contains("SignUp")) {
    if (input.getAttribute("id") == "nameSignUp") {
      input.addEventListener("input", (user) => {
        accounts.username = user.target.value;
      });
    } else if (input.getAttribute("id") == "passSignUp") {
      input.addEventListener("input", (password) => {
        accounts.password = password.target.value;
      });
    } else if (input.getAttribute("id") == "passRepSignUp") {
      input.addEventListener("input", (passrep) => {
        check = passrep.target.value;
      });
    }
  }
});

buttonSignUp.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  console.log(accounts.username, accounts.password, check);
  if (accounts.password === check) {
    localStorage.setItem("accountsLocal", JSON.stringify(accounts));
    alert("Account created successfully! Now please Sign In");
  } else {
    alert("Password not the same as Repeated Password");
  }
});

buttonSignIn.addEventListener("click", (e) => {
  e.preventDefault();
  const accountsLocal = JSON.parse(localStorage.getItem("accountsLocal"));
  console.log("From local storage", accountsLocal);
  console.log("From current input", accounts);
  if (accounts.username == accountsLocal.username) {
    if (accounts.password == accountsLocal.password) {
      alert("Yaaaaay, you're redirecting to main page");
    } else {
      alert("username or password incorrect");
    }
  } else {
    alert("username or password incorrect");
  }
});
