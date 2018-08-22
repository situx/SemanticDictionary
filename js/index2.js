$('#langtextsel').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    $.ajax({
    	url: "http://localhost:8080/IMETest2/rest/lndwa/sampletextview?lang="+this.value,
    	async: false,
    	dataType: 'text',
	    error: function (err) {
	    	console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
	    },
    	success: function(data) {
    		  		$('#textsel').html(data);
    	}

    });
});
$('#textsel').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    $.ajax({
    	url: "http://localhost:8080/IMETest2/"+valueSelected,
    	async: false,
    	dataType: 'text',
	    error: function (err) {
	    	console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
	    },
    	success: function(data) {
    		  		$('#translationdiv').html("<textarea id=\"lefttextarea\" class=\"target\" rows=\"19\" cols=\"50\">"+data+"</textarea>");
    	}

    });
});