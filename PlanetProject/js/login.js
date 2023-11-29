//get items from the local storage if they are any
const accounts = {
    username: '',
    password: ''
}

const signin = document.querySelector('#tab-1');
const signup = document.querySelector('#tab-2');
let check='';


// signin.addEventListener('click', (e)=>{
//     localStorage.getItem('credentials');
//     const user = document.querySelectorAll('input');
//     const submit = document.querySelectorAll("[type='submit']");
// })

signup.addEventListener('click',(e)=>{
    const user = document.querySelectorAll('input');
    const submitButtons = document.querySelectorAll("[type='submit']");

    user.forEach((input) =>{
        if(input.Target.getAttribute('name')==='username'){
            accounts[username]=input.Target.value;
        }else if(input.Target.getAttribute('name')==='pass'){
            accounts[password]=input.Target.value;
        }else if(input.Target.getAttribute('name')==='passrep'){
            check=input.Target.value;
        }
    })

    submitButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(accounts.username, accounts.password, check);
        })
    })
})
