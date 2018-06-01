/**
 * 
 */

function func(){   // browser navigator
	
	var ua = navigator.userAgent;
	var bArr = ["Chrome", "Firefox", "Safari", "Opera", "MSIE"];
	var res;
	for (var i = 0; i < bArr.length; i++){
		if ( ua.indexOf(bArr[i]) > -1){
			res = bArr[i];
			break;
		}
		
	}
	alert("You are using " + res + " browser");

}