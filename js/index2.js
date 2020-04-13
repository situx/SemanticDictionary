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
    		  		$('#translationdiv').html("<textarea id=\"lefttextarea\" class=\"target\" rows=\"19\" cols=\"50\">"+data+"</textarea>");
					$("#lefttextarea").on("click", function (event) {
    console.log("On Key Up");
    var caret = getCaretPosition(this);
    var caretXY=$(this).textareaHelper('caretPos');
    xpos=event.pageX-100
    ypos=event.pageY
	if(xpos<0){
		xpos=0;
	}
    var result = /\S+$/.exec(this.value.slice(0, this.value.indexOf(' ',caret.end)));
    lastWord = result ? result[0] : null;
    console.log(lastWord)
    //alert(JSON.stringify(caretXY));
    $("#lefttextarea").prop('title',lastWord);
    $("#lefttextarea").prop('title2',caretXY);
     $(document).tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
	  position.top=ypos+12//caretXY.top+12;
	  position.left=xpos//-$("#lefttextarea").width()+caretXY.left+300;
          $( this ).css( position);	  
          $( "<div>" )
            .addClass( "arrow.top" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      },
          content: function () {
              console.log("Get Word Information")
              return getWordInformation($(this).prop('title'),$('#leftsel').val(),
            		  $('#rightsel').val(),false,"<br>");
          }
      });
	  $(this).mouseout();
	  $(this).mouseover();

    //alert(getWordInformation(lastWord,"hit","cunei",false));
});
    	}

    });
});
