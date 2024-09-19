// show the cash out form

document.getElementById("btn_show_cash_out").addEventListener("click", function(){

    // show cash out button clicked
   document.getElementById("cash_out_form").classList.remove("hidden");

   // hidden the add money form
   document.getElementById("add_money_form").classList.add("hidden");

})


// show the add money form 

document.getElementById("btn_show_add_money").addEventListener("click", function(){
   // show add money button clicked
   document.getElementById("add_money_form").classList.remove("hidden");

   // hide the cash out form
   document.getElementById("cash_out_form").classList.add("hidden");
})