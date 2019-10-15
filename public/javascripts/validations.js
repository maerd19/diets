document.addEventListener("DOMContentLoaded", function(){
  console.log('Validation succesful');
  
  // HTML5 form validation

  function supports_input_validity(){
    let i = document.createElement("input");
    return "setCustomValidity" in i;
  }

  if(supports_input_validity()) {
    let usernameInput = document.getElementById("username");
    usernameInput.setCustomValidity(usernameInput.title);

    let pwd1Input = document.getElementById("password");
    pwd1Input.setCustomValidity(pwd1Input.title);

    let pwd2Input = document.getElementById("confirm-pass");

    // input key handlers

    usernameInput.addEventListener("keyup", function(e){
      usernameInput.setCustomValidity(this.validity.patternMismatch ? usernameInput.title : "");
    }, false);

    pwd1Input.addEventListener("keyup", function(e){
      this.setCustomValidity(this.validity.patternMismatch ? pwd1Input.title : "");
      if(this.checkValidity()) {
        pwd2Input.pattern = RegExp.escape(this.value);
        pwd2Input.setCustomValidity(pwd2Input.title);
      } else {
        pwd2Input.pattern = this.pattern;
        pwd2Input.setCustomValidity("");
      }
    }, false);

    pwd2Input.addEventListener("keyup", function(e){
      this.setCustomValidity(this.validity.patternMismatch ? pwd2Input.title : "");
    }, false);

  }

  if(!RegExp.escape) {
    RegExp.escape = (s) => {
      return String(s).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
    };
  }

}, false);
