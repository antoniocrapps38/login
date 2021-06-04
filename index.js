function validateForm(){

  var validateUsername = document.forms["myForm"]["username"].value;
  var validatePassword = document.forms["myForm"]["password"].value;

  if(validateUsername == "" && validatePassword == ""){

    alert("invalid input");
    return false;
  }

}
