// search: form submit reloading the page


// step 1: set event handler
// login button get value
document.getElementById("button_login").addEventListener("click", function(event){
    // step 2 Prevents the form from reloading the page or ফর্ম সাবমিট হলেও পেজ রিলোড হবে না
    event.preventDefault(); 
    
  // step 3: Get values from input fields
    const phoneNumber = document.getElementById("phone_number").value;
    const pinNumber = document.getElementById("pin_number").value;
    console.log(phoneNumber, pinNumber)

    // step 4:check validate phone and pin
    // this is temporary bad way
    if(phoneNumber === "9330542657" && pinNumber === "2000"){
        console.log("you are logged in");
        // step 5:  Replace with your desired page
        window.location.href = './home.html';

    }else{
        alert("worng phone number or pin");
    }
})



// document.getElementById("button_login").addEventListener("click", function(event){
//     event.preventDefault();

//     //  Get values from input fields
//     const phoneNumber = document.getElementById("phone_number").value;
//     const pinNumber = document.getElementById("pin_number").value;

//     // 
// })