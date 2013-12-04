// $(document).ready(function() {

function enableEditing() {
	var lhs = document.getElementsByClassName('lhs');
	var rhs = document.getElementsByClassName('rhs');
	var i;

	if (lhs[0].style.display === "block") {
		for(i = 0; i<lhs.length; i++) {
			lhs[i].style.display = "none";
		}

		for(i = 0; i<rhs.length; i++) {
			rhs[i].style.display = "block";
		}
	}

	else {
		for(i = 0; i<lhs.length; i++) {
			lhs[i].style.display = "block";
		}

		for(i = 0; i<rhs.length; i++) {
			rhs[i].style.display = "none";
		}
	}
}

function addSem () {
	var semView = document.getElementById('semester-view');
	semView.
	
}

function deleteSem(sem) {
	var element = document.getElementById(sem);
	element.parentNode.removeChild(element);
}

$(document).ready(function(){
	$("#plus-button").click(function(event) {
		$("#semester-view").hide();
		$("#add-semester-overlay").show();
	});
});
