// search: form submit reloading the page


// step 1: set event handler
// login button get value
document.getElementById("button_login").addEventListener("click", function(event){
    // step 2 Prevents the form from reloading the page or ফর্ম সাবমিট হলেও পেজ রিলোড হবে না
    event.preventDefault(); 
    console.log("login button click")

    // step 3: get the phone number
    const phoneNumber = document.getElementById("phone_number").value;
    console.log(phoneNumber)
})