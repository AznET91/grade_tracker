// $(document).ready(function() {

function enableEditing() {
	var lhs = document.getElementsByClassName('lhs');
	var rhs = document.getElementsByClassName('rhs');
	var i;

	if (lhs[0].style.display === "none") {
		for(i = 0; i<lhs.length; i++) {
			lhs[i].style.display = "block";
		}

		for(i = 0; i<rhs.length; i++) {
			rhs[i].style.display = "none";
		}
	}

	else {
		for(i = 0; i<lhs.length; i++) {
			lhs[i].style.display = "none";
		}

		for(i = 0; i<rhs.length; i++) {
			rhs[i].style.display = "block";
		}
	}
}

// });