$("#first-choice").change(function() {

	var $dropdown = $(this);

	$.getJSON("http://kirolous.com/static/php/logindb.php", function(data) {
	
		var key = $dropdown.val();
		var vals = [];
							
		switch(key) {
			case 'Printer_Name':
				vals = data.Printer_Name.split(",");
				break;
			case 'Printer_URL':
				vals = data.Printer_URL.split(",");
				break;
			case 'base':
				vals = ['Please choose from above'];
		}
		
		var $secondChoice = $("#second-choice");
		$secondChoice.empty();
		$.each(vals, function(index, value) {
			$secondChoice.append("<option>" + value + "</option>");
		});

	});
});