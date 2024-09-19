/**
 * 1. addEvent listener to the add money button (form submit)
 * make sure to prevenDefault so that page does'nt reloads
 * 2. get the money user ants to add 
 * also, get the pin number provided
 * 3. verify the pin number. for, wrong pin number ==> failed to add
 * for right pin number, allow to add the number to the account balance
 * 4. get the current balance
 * 5. add money to be added with the current balance
 * 6. display/ updated the balance in the DOM/UI
 */


document.getElementById("btn_add_money").addEventListener("click", function(event){
    event.preventDefault();

     const addMoneyInput = document.getElementById("input_add_money").value;
     const pinNumber = document.getElementById("input_pin_number").value;

     if(pinNumber === "2005"){
      // add money to the account
      const balance = document.getElementById("account_balance").innerText;
      
      const balanceNumber = parseFloat(balance);
      const addMoneyNumber = parseFloat(addMoneyInput);
       // new balance
      const newBalance = balanceNumber + addMoneyNumber;
        // updated the DOM with updated balance
      document.getElementById("account_balance").innerText = newBalance;
      
     }
     else{
        alert("Failed to add money! please try again.")
    }
     
})