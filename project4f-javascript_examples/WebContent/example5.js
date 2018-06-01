/**
 * 
 */
function func(){   // if, else 
	var arr = ["dog", "cat", 3, 5, false];
	for (i = 0; i < arr.length; i++){
		if ( i / 2 == 0){
			document.write(arr[i] + " Yes! <br>");
		} else {
			document.write(arr[i] + " No! <br>");			
		}		
	}
}

