function verifyOneClick() {
    let token = grecaptcha.getResponse()
    if(token.trim() != "") {
        document.getElementById("response_token").innerHTML = token
    } else {
        document.getElementById("response_token").innerHTML = "NOT COMPLETE"
    }
}