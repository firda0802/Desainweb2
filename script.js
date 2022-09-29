const form = document.querySelector("form"),
    nextBtn = form.querySelector(".nextBtn"),
    backBtn = form.querySelector(".backBtn"),
    allinput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", ()=> {
    allinput.forEach(input => {
        if (input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})
backBtn.addEventListener("click", () =>
form.classList.remove('secActive'));

var Email = document.forms['form']['email'];
var Fullname = document.forms['form']['fullname'];
var email_error = document.getElementById('email_error');
var Fullname_error = document.getElementById('fullname_error');

Email.addEventListener('textInput', email_Verify);
Fullname.addEventListener('textInput', fulnam_Verify);

function validated(){
	if (Email.value.length < 9) {
		Email.style.border = "1px solid red";
		Email_error.style.display = "block";
		Email.focus();
		return false;
	}
	if (Fullname.value.length < 6) {
		Fullname.style.border = "1px solid red";
		fulnam_error.style.display = "block";
		Fullname.focus();
		return false;
	}

}
function email_Verify(){
	if (Email.value.length >= 8) {
		Email.style.border = "1px solid silver";
		Email_error.style.display = "none";
		return true;
	}
}
function fullnam_Verify(){
	if (Fullname.value.length >= 5) {
		Fullname.style.border = "1px solid silver";
		fulnam_error.style.display = "none";
		return true;
	}
}

