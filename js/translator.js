var langToTransMap={};
var transmap={};
var markmap={};
var lastWord;
var highlighted=false;

function replaceAll(string, find, replace) {
	  return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function getRecord(syll,transmap){
     //alert("GetRec: "+JSON.stringify(transmap));
tempmap=window[$('#langtextsel').val()+"_matches"]["matches"].filter(function (el) {
 //tempmap=transmap["records"].filter(function (el) {
  return el.transliteration === syll || el.script === syll
});    
 //alert("Filtered: "+syll+" "+JSON.stringify(tempmap));
 return tempmap;
}

function translate(originalText,language,language2,escapechars,transmap){
	result="";
	originalText=replaceAll(originalText,"[","");
	originalText=replaceAll(originalText,"]","");
	if(escapechars){
		originalText=replaceAll(originalText,"#","-#-");
	}else{
		originalText=replaceAll(originalText,"#","");
		originalText=replaceAll(originalText," x","");
	}
	originalText=replaceAll(originalText,"?","");	
	originalText=replaceAll(originalText,"|","");
	originalText=replaceAll(originalText,"}","-");
	originalText=replaceAll(originalText,"{","");
	originalText=replaceAll(originalText,".","-");
	lines=originalText.split("\n");
	for (i=0; i<lines.length; ++i) {
		line=lines[i];
		//alert("Line: "+line);
		words=line.split(" ");
		for(j=0; j<words.length; ++j){
			word=words[j];
			//alert("Word: "+word);
			sylls=word.split("-");
			for(k=0; k<sylls.length; ++k){
				syll=sylls[k];
				//alert("Syll: "+syll);
                rec=getRecord(syll,transmap)
                //alert(JSON.stringify(rec[0]))
                //alert(JSON.stringify(rec[0].script))
				if(rec!= undefined && rec.length>0){
					result+=rec[0].script;					
				}else{
					result+=syll;
				}
			}
			result+=" ";
		}
		result+="\n";
	}
	result=replaceAll(result,"(","");
	result=replaceAll(result,")","");
	return result;
}

function prepareTranslation(language){
	$(document).ready(function(){
            
		$.ajax({
	    	url: "https://situx.github.io/SemanticDictionary/js/"+language+"_map.js",
	    	async: false,
	    	dataType: 'json',
		    error: function (err) {
		    	console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
		    },
	    	success: function(data) {
	    		var transmap=data;  
                        alert(transmap)
	    	}

	    });
		$("#translatebutton").click(function() {
                       alert($('#leftsel').val()+"_matches");
                    if($('#leftsel').val() in langToTransMap){
                        transmap=langToTransMap[$('#leftsel').val()]
                            $('textarea#righttextarea').val(translate($('textarea#lefttextarea').val(),$('#leftsel').val(),$('#rightsel').val(),$("#escapechars").is(':checked'),transmap));
                    }else{
                        $.getScript( "https://situx.github.io/SemanticDictionary/js/"+$('#leftsel').val()+"_map.js", function( data, textStatus, jqxhr ) {
                           // console.log( data ); // Data returned
                            transmap=data;
                            console.log( textStatus ); // Success
                            console.log( jqxhr.status ); // 200
                            console.log( "Load was performed." );
                            langToTransMap[$('#leftsel').val()]=window[$('#leftsel').val()+"_map"];
                            alert(JSON.stringify(langToTransMap[$('#leftsel').val()]))
                           transmap=langToTransMap[$('#leftsel').val()]
                            alert(JSON.stringify(transmap))
                            $('textarea#righttextarea').val(translate($('textarea#lefttextarea').val(),$('#leftsel').val(),$('#rightsel').val(),$("#escapechars").is(':checked'),transmap));
                    });
                    
                    }

		      /* if(highlighted){
                        $.ajax({
                            url: "http://localhost:8080/IMETest2/"+$('#textsel').val(),
                            async: false,
                            dataType: 'text',
                            error: function (err) {
                                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                            },
                            success: function(data) {
    		  		$('#translationdiv').html("<textarea id=\"lefttextarea\" class=\"target\" rows=\"19\" cols=\"50\">"+data+"</textarea>");
                            }
                        });
                       }
			  highlighter=$('.translation').find('.target')
			    .textareaHighlighter(window[$('#leftsel').val()+"_matches"]);
                               */    
                        highlighted=true;

		});
		$("#postagbutton").click(function(){
                        //alert($('#leftsel').val()+"_matches");
			//alert(JSON.stringify(window[$('#leftsel').val()+"_matches"]["matches"]));
			if(highlighted){
                        /*$.ajax({
                            url: "lang/"+$('#langtextsel').val()+"/pos/"+$('#langtextsel').val()+"_matches.js",
                            async: false,
                            dataType: 'text',
                            error: function (err) {
                                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                            },
                            success: function(data) {
    		  		$('#translationdiv').html("<textarea id=\"lefttextarea\" class=\"target\" rows=\"19\" cols=\"50\">"+data+"</textarea>");
                            }
                        });*/
                        }
			  highlighter=$('.translation').find('.target')
			    .textareaHighlighter(window[$('#langtextsel').val()+"_matches"]);
                        highlighted=true;
				//alert(JSON.stringify(window[$('#langtextsel').val()+"_matches"]))
                    
                })
		//getRuleScriptForPOS("hit");
	});
}

function getRuleScriptForPOS(language){
$.getScript( "lang/"+language+"/pos/"+language+"_matches.js", function( data, textStatus, jqxhr ) {
	  console.log( data ); // Data returned
	  console.log( textStatus ); // Success
	  console.log( jqxhr.status ); // 200
	  console.log( "Load was performed." );
	console.log("Textarea was initialized!");
	});
}

function getCaretPosition(ctrl) {
    var start, end;
    if (ctrl.setSelectionRange) {
        start = ctrl.selectionStart;
        end = ctrl.selectionEnd;
    } else if (document.selection && document.selection.createRange) {
        var range = document.selection.createRange();
        start = 0 - range.duplicate().moveStart('character', -100000);
        end = start + range.text.length;
    }
    return {
        start: start,
        end: end
    }
}

function getWordInformation(word,language,language2,escapechars,separator){
  var result="";
  result+=word+separator;  
  result+="Translation: "+translate(word,language,language2,escapechars)+separator;
  result+=getHighlightedWord(word);
  return result;
  
}

function getHighlightedWord(text) {
    var list = window[$('#langtextsel').val()+"_matches"]["matches"];
    //alert($('#leftsel').val()+"_matches");
   //alert(JSON.stringify(list));
    var item;
    var matches;
    var result="";
    for (var i = 0, imax = list.length; i < imax; i++) {
      item = list[i];

      if (item["match"]) {
            //alert(JSON.stringify(item));
        //item._trie = new marexandre.Trie();
        if (item["match"] instanceof RegExp) {
	  if(text.match(item.match)!=null){
            //alert(item.match);
	    //alert(text.match(item.match));
	    matches = text.match(item.match);
	  }
        } else {
          matches = item.match;
        }
        if(matches!=null){
        // HTML escape matching words
        var matchgroup=window[$('#langtextsel').val()+"_matches_groups"][item.tag];
        //alert(JSON.stringify(matches));
        result="";
        if(matchgroup!=null){
        for(j=0;j<matchgroup.length;j++){
            //alert("Matchgroup["+j+"]");
            if(matches[matchgroup[j]["group"]].match(matchgroup[j]["match"])){
               // alert("Matchgroup: "+matchgroup[j]["description"]);
                result+=matchgroup[j]["description"];
            }
        }
        }
	  //alert(item.description);
          //alert(JSON.stringify(item));
          result+=item.description;
          //alert(result);
	  return result;
	}
      }
  }
  }

$(document).ready(function(){
$("#lefttextarea").on("click", function (event) {
    //alert("On Key Up");
    var caret = getCaretPosition(this);
    var caretXY=$(this).textareaHelper('caretPos');
    xpos=event.pageX
    ypos=event.pageY
    var result = /\S+$/.exec(this.value.slice(0, this.value.indexOf(' ',caret.end)));
    lastWord = result ? result[0] : null;
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
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      },
          content: function () {
              return getWordInformation($(this).prop('title'),$('#leftsel').val(),
            		  $('#rightsel').val(),false,"<br>");
          }
      });
	  $(this).mouseout();
	  $(this).mouseover();

    //alert(getWordInformation(lastWord,"hit","cunei",false));
})});
