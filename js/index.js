//import polyfill
import '@babel/polyfill';

//import login.js code
import { recharge } from './recharge';

console.log("I enter")

//DOM ELEMENT
const postRecharge = document.getElementById('form');


//Recharge
if (postRecharge) {
    postRecharge.addEventListener('submit', e => {

        //prevent default load
        e.preventDefault();

        //VALUES
        //get the data
        const code = document.getElementById('op').value;
        const Amount = document.getElementById('amount').value;
        const phoneNumber = document.getElementById('number').value;
        const secretKey = "opp6nb7w3qzm"

        
        recharge(code, secretKey, phoneNumber, Amount);
        postRecharge.reset();
    });
};

