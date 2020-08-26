function validate() {
  var error1 = document.getElementById("error1")
  var error2 = document.getElementById("error2")
  var error3 = document.getElementById("error3")
  var error4 = document.getElementById("error4")


  /* (1)Name check */
  var x = document.forms["form"]["name"].value;
  /* Checks whether its empty */
  if (x == "") {
    error1.innerText = "*Name must be filled out";
    return false;
  }
  /* Name not a number.. HMMMM */
  if (!isNaN(x)){
    error1.innerText=  "Name cannot be a number";
    return false;
  }
  /* Name length no lesser than 3 characters */
  if (x.length < 3){
    error1.innerText= "Name must at least contain 3 characters";
    return false;
  }

  /* (2)Email check */
  var x = document.forms["form"]["email"].value;
  /* Checks whether its empty */
  if (x == "") {
    error2.innerText= "Email must be filled out";
    return false;
  }
  /* Email must contain .com */
  if (!x.includes(".com")){
    error2.innerText= "Invalid Email Address";
    return false;
  }

  /* (3)Bank Card check */
  var x = document.forms["form"]["card"].value;
  /* Checks whether its empty */
  if (x == "") {
    error3.innerText= "Card Number must be filled out";
    return false;
  }
  /* Checks Card number length */
  if (x.length<16 || x.length>16){
    error3.innerText= "Card Number incorrect length";
    return false;   
  }
  /* Checks whether input contains anything other than numbers */
  if (isNaN(x)){
    error3.innerText= "Input should be all numbers";
    return false;   
  }

  /* (4)Checkbox check */
  var x = document.getElementById("checkbox");
  if (x.checked == false){
    error4.innerText= "Check box not clicked.";
    return false;
  }
}
