

$(document).ready(function () {

	var localStorageData = localStorage.getItem('Saved Preferences');
	document.querySelector('.listPreference').innerHTML = localStorageData;


	$('.backToUSMapFromPrintData').on('click', function() {
		window.history.go(-1);
	})


	$('.removeAll').on('click', function() {
		sweetAlert({
			title: "Are you sure?",  
			text: "You will not be able to recover these choices!",   
			type: "warning",   
			showCancelButton: true,   
			confirmButtonColor: "#DD6B55",   
			confirmButtonText: "Yes, remove them all!",   
			cancelButtonText: "No, cancel!",   
			closeOnConfirm: false,   
			closeOnCancel: false }, 
			function(isConfirm){   
				if (isConfirm) {     
					sweetAlert("Deleted!", "All your saved choices have been removed!", "success");
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

	$('.removeSavedPlace').on('click', function() {
		var currentLocalStorage = localStorage.getItem('Saved Preferences');

		var thisWrapper = $(this).closest(".savedPreferencesWrapper");
		var placeNameOfThisWrapper = $(thisWrapper).find('h4').text();
		var indexOfPlaceName = currentLocalStorage.indexOf(placeNameOfThisWrapper);

		var nextWrapper = $(this).closest(".savedPreferencesWrapper").next();
		var placeNameOfNextWrapper = $(nextWrapper).find('h4').text();
		var indexOfNextPlaceName = currentLocalStorage.indexOf(placeNameOfNextWrapper);
		if (indexOfNextPlaceName == 0) {
			indexOfNextPlaceName = currentLocalStorage.length + 97;
		}

		// part of local storage string that represents the clicked place
		var localStorageLocationString = currentLocalStorage.substring(indexOfPlaceName - 97, indexOfNextPlaceName - 97);
		currentLocalStorage = currentLocalStorage.replace(localStorageLocationString, "");

		// remove the location string from local storage
		localStorage.setItem('Saved Preferences', currentLocalStorage);

		// remove the location HTML from the DOM
		thisWrapper.remove();
	})
})