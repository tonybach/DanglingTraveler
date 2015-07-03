

$(document).ready(function () {

	var localStorageData = localStorage.getItem('Saved Preferences');
	document.querySelector('.listPreference').innerHTML = localStorageData;


	$('.backToUSMapFromPrintData').on('click', function() {
		window.history.go(-1);
	})


	$('.clearAll').on('click', function() {
		sweetAlert({
			title: "Are you sure?",  
			text: "You will not be able to recover these choices!",   
			type: "warning",   
			showCancelButton: true,   
			confirmButtonColor: "#DD6B55",   
			confirmButtonText: "Yes, delete them all!",   
			cancelButtonText: "No, cancel!",   
			closeOnConfirm: false,   
			closeOnCancel: false }, 
			function(isConfirm){   
				if (isConfirm) {     
					sweetAlert("Deleted!", "All your saved choices have been cleared!", "success");
					localStorage.clear();
					document.querySelector('.listPreference').innerHTML = "";
				} else {     
					sweetAlert("Cancelled", "Your choices are safe :)", "error");   
				} 
			});
	})

	$('.printData').on('click', function() {
		javascript:window.print();
	})

	$('.saveAsXHTML').on('click', function() {
		var blob = new Blob(
			[(new XMLSerializer).serializeToString(document)]
       		 , {type: "application/xhtml+xml;charset=" + document.characterSet}
    	)
    	saveAs(blob, "savedData.xhtml");
	})
})