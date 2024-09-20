



document.getElementById("btn_cash_out").addEventListener("click", function(event){
    event.preventDefault();
    
    // get the value
    const cashOutInput = document.getElementById("input_cash_out").value;
    const pinNumberInput = document.getElementById("input_cash_out_pin").value;
  
    if(pinNumberInput === "2005"){
        
        const balance = document.getElementById("account_balance").innerText;
        
        const cashOutNumber = parseFloat(cashOutInput);
        const balanceNumber = parseFloat(balance);
       
        const newBalance = balanceNumber - cashOutNumber;

         document.getElementById("account_balance").innerText = newBalance;
    }
    else{
        alert("Failed to add money! please try again.")
    }
})

