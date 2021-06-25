const loginBTN = document.querySelector('.login');

const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
})
loginBTN.addEventListener('click', () => {
    // alert('PUSSY');
    inputs[1].focus();
})

const inputs = Array.from(document.getElementsByTagName('input'));
const clearBTN = document.querySelector('.clear');

clearBTN.addEventListener('click', ()=>{
    inputs.forEach(input => {
        input.value ="";
    });
})

