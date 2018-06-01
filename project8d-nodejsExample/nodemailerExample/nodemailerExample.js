var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'youremailaddr@gmail.com',
		pass: 'youremailpasswd'
	}
});

var mailOptions = {
	from: 'youremailaddr@gmail.com',
	to: 'targetemailaddr@163.com',
	subject: 'Sending Email using Node.js',
	text: 'that was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent:' + info.response);
	}
});

//----------------Invalid login:
// node nodemailerExample.js
// { Error: Invalid login: 534-5.7.14 <https://accounts.google.com/signin/continue?sarp=1&scc=1&plt=AKgnsbtB
// 534-5.7.14 b69tXyTCOkE5im2AiKOgM7mRPe1KTVThKQ0x6-oHzQh5qitPFkn4fGjWObRVCaS19JSipq

// 81
// down vote
// I solved this by going to the following url (while connected to google with the account I want to send mail from):

// https://www.google.com/settings/security/lesssecureapps

// There I enabled less secure apps.

// Done