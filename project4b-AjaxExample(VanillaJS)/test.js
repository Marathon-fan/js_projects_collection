

			xhr.onload = function() {
				   console.log('READYSTATE: ', xhr.readyState);
			    if (this.status == 200) {
			        console.log(this.responseText);
			    }
			}