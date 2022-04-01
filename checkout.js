if (localStorage.getItem("isVerified")) {
    document.querySelector(".checkout-ordersuccessful-btn").href = "orderSuccessful.html"
} else {
    document.querySelector(".checkout-ordersuccessful-btn").href = "login.html"
}