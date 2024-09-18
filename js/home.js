// add money to the account

/**
 * s-1: add event handler
 * prevent page reload after form submit
 * s-2: get money to be added to the account balance
 * s-3
 */

// step 1: add an evnet handler to the add money button inside the form
document.getElementById("btn_add_money").addEventListener("click", function(event){
    // step 2:prevent page reload after form submit
    event.preventDefault();

    //step 3: get money to be added to the account
    const addMoney = document.getElementById("input_add_money").value;
     console.log(addMoney)

    // get the pin number provided
    const pinNumberInput= document.getElementById("input_pin_number").value; 
    console.log(pinNumberInput)
    
})