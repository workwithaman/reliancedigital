function validateEmail(email) {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
  }
  function validate() {
    let result = document.querySelector("#result");
    let email = document.querySelector("#email").value;
    result.innerHTML = "";

    if(validateEmail(email)) {
        result.innerHTML = email + " is valid email";
        result.style.color = "#1f4985";
        localStorage.setItem("isVerified", "true")
        console.log("sad")
        document.querySelector("#validatorForEmail").href = "category.html"
    } else {
        event.preventDefault();
        result.innerHTML = email + " is not valid email";
        result.style.color = "rgb(228, 37, 41)";
        document.querySelector("#validatorForEmail").href = ""
    }
  }

document.querySelector("#validatorForEmail").addEventListener("click",validate)