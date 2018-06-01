/**
 * 
 */

function isValidEmail(emailAddress){
	var emailRegExp = /^(([^<>()\[\]\\.,;:@"\x00-\x20\x7F] |\\.)+("""([^\x0A\x0D"\\] | \\\\)+ """))@(([a-z]|#\d+?)([z-z0-9-]|#\d+?)*([a-z0-9|#\d+?)\.)+([a-z]{2,4})$/i;
	return emailRegExp.test(emailAddress);
	
	
}

function func(){   // validate email address
	
	var email = prompt("Please enter an emaill address.", "");
	if (isValidEmail(email)){
		alert("Valid Email Address");
	} else {
		alert("Invalid Email Address");
	}
	
}