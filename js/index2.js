$('#langtextsel').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    $.ajax({
    	url: "https://situx.github.io/SemanticDictionary/lang/"+this.value+"/textlist.txt",
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
    	url: "https://situx.github.io/SemanticDictionary/lang/"+$('#langtextsel').val()+"/text/"+valueSelected,
    	async: false,
    	dataType: 'text',
	    error: function (err) {
	    	console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
	    },
    	success: function(data) {
                    $('#lefttextarea').val(data)
    		  		//$('#translationdiv').html("<textarea id=\"lefttextarea\" class=\"target\" rows=\"19\" cols=\"50\">"+data+"</textarea>");
    	}

    });
});
