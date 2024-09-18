// add money to the account

/**
 * s-1: add event handler
 * prevent page reload after form submit
 * s-2: get money to be added to the account balance
 * get the pin number
 * 
 * s-3: verify the pin number
 */

// step 1: add an evnet handler to the add money button inside the form
document.getElementById("btn_add_money").addEventListener("click", function(event){
    // :prevent page reload after form submit
    event.preventDefault();

    //step 2: get money to be added to the account
    const addMoney = document.getElementById("input_add_money").value;
     console.log(addMoney)

    // get the pin number provided
    const pinNumberInput= document.getElementById("input_pin_number").value; 
    console.log(typeof pinNumberInput)

    // step 3: verify pin number
    // wrong way to validate pin number
    if(pinNumberInput === "2005"){
        console.log("adding money to your account");

        // step 4: get the current value
        const balance = document.getElementById("account_balance").innerText;
        console.log(typeof balance)

        // step 5: add addMoney with balance
        const addMoneyNumber = parseFloat(addMoney);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        console.log(newBalance);

        // step 6: updated the balance in the UI/DOM
        document.getElementById("account_balance").innerText = newBalance;
    }
    else{
        alert("Failed to add money! please try again.")
    }
    
})