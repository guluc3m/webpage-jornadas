//Al rellenar los input text: emailpj1, emailpj2 y emailpj3 cambiar la opacidad de "iconpjX" correspondiente

document.addEventListener("DOMContentLoaded", function(event) {
	var mail1 = document.getElementById('emailpj1');
	var mail2 = document.getElementById('emailpj2');
	var mail3 = document.getElementById('emailpj3');
	mail1.onchange = function(){
		if (verifyEmail(mail1.value)) {
			document.getElementById('iconpj1').style.opacity = 1;
		} else {
			document.getElementById('iconpj1').style.opacity = 0;
		}
	};
	mail2.onchange = function(){
		if (verifyEmail(mail2.value)) {
			document.getElementById('iconpj2').style.opacity = 1;
		} else {
			document.getElementById('iconpj2').style.opacity = 0;
		}
	};
	mail3.onchange = function(){
		if (verifyEmail(mail3.value)) {
			document.getElementById('iconpj3').style.opacity = 1;
		} else {
			document.getElementById('iconpj3').style.opacity = 0;
		}
	};
});

function verifyEmail(text){
	var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
     if (text.search(emailRegEx) != -1) {
          return true
     }
     return false;
}