const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-List')


function toggleButton() {
    navList.classList.toggle('show')

   
}
hamburgerButton.addEventListener('click', toggleButton)



/*const hiremeButton = document.getElementById('Hireme')
const hireButton = document.getElementById('hire-me')


function display() {
    hireButton.classList.display(show)


}
hiremeButton.addEventListener('click', ' welcome to midala, you are set to hire-me.please processed!')



const signupButton = document.getElementById('signupbutton')
const signup = document.getElementById('signup')


function display() {
    signupButton.classList.display(show)
    console.log('you  + are sigup to reach me ,thank for contacting us!')


}
signupButton.addEventListener('click', "you're sigup to reach me ,thank for contacting us!")



const  submitBtn = document.getElementById('submitbtn')
const submit = document.getElementById('submit')



function display() { 
    submitButton.classList.display(show)


}

submitButton.addEventListener('click', "you've successfully contact us await for our service!")



/*() 
    navbarButton.classList.toggle(show);

hamburgerButton.addEventListener('click', togglebutton);



addEventListener('click', 'hello your sending direct message to midala')*/