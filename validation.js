
function validateForm(){

    valid = true;
  
    if(document.contact_form.user.value == ""){
      alert("Please fill your name!");
      valid = false;
    }
  
    return valid;
  }