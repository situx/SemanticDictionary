var langToTransMap={};
var transmap={};
var transdict={};
var markmap={};
var lastWord;
var highlighted=false;
var langmap={}
var langcharmap={}

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
    //console.log(el)
  return el.transliteration === syll || el.script === syll
});    
 //alert("Filtered: "+syll+" "+JSON.stringify(tempmap));
 return tempmap;
}

function getTranslationFromDictionary(word,wordparticlesremoved,language,resultstring){
	console.log(language)
	var dict=window[language]["records"]
	if(!(language in langmap)){
		langmap[language]={}
		langmap[language]["pos"]={}
		langmap[language]["transliteration"]={}
		for(rec in dict){
			if(!(dict[rec]["pos"] in langmap[language]["pos"])){
				langmap[language]["pos"][dict[rec]["pos"]]=[]
			}
			langmap[language]["pos"][dict[rec]["pos"]].push(dict[rec])
			if(!(dict[rec]["transliteration"] in langmap[language]["transliteration"])){
				langmap[language]["transliteration"][dict[rec]["transliteration"]]=[]
			}
			langmap[language]["transliteration"][dict[rec]["transliteration"]].push(dict[rec])	
		}
	}
	console.log(langmap[language]["transliteration"][word])
	if(word in langmap[language]["transliteration"]){
		resultstring+="Translation: "+langmap[language]["transliteration"][word][0]["translation"]
		return langmap[language]["transliteration"][word][0]["translation"];
	}
	return "";
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
			if(word.trim()=="")
				continue;
			if(word.match(/[A-Z][a-z0-9].*/)){
				result+=word.replace("-","")+" "
				continue;
			}
			console.log("Looking up word: "+word.replace("[","").replace("]","").trim())
			matches=getHighlightedWord(word,true)
			console.log(matches)
			if(typeof matches !== 'undefined' && typeof matches.value !== 'undefined'){
				console.log("Found Match: "+matches)
				result+=matches.value.replace("<br>","")+" "
				continue;
			}
			dictlookup=getTranslationFromDictionary(word.replace("[","").replace("]","").trim(),word.replace("[","").replace("]","").trim(),language,"")
			if(typeof dictlookup !== 'undefined' && dictlookup!=""){
				console.log("Found dict Match: "+dictlookup)
				result+=dictlookup+" "
				continue;
			}
			//alert("Word: "+word);
			sylls=word.split("-");
			result+="( "
			for(k=0; k<sylls.length; ++k){
				syll=sylls[k];
				//alert("Syll: "+syll);
                rec=getRecord(syll,transmap)
                //alert(JSON.stringify(rec[0]))
                //alert(JSON.stringify(rec[0].script))
				if(rec!= undefined && rec.length>0){
					result+=rec[0].script;					
				}else{
					result+=syll+" ";
				}
			}
			result+=") ";
		}
		result+="\n";
	}
	result=replaceAll(result,"()","");
	//result=replaceAll(result,")","");
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
                        //alert(transmap)
	    	}

	    });
		$("#translatebutton").click(function() {
                       //alert($('#leftsel').val()+"_matches");
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
                            //alert(JSON.stringify(langToTransMap[$('#leftsel').val()]))
                           transmap=langToTransMap[$('#leftsel').val()]
                            //alert(JSON.stringify(transmap))
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
			    .textareaHighlighter(window[$('#langtextsel').val()+"_matches"],{isAutoExpand:true,debug:true});
                        highlighted=true;
				//alert(JSON.stringify(window[$('#langtextsel').val()+"_matches"]))
                    
                })
		//getRuleScriptForPOS("hit");
	});
}

function getRuleScriptForPOS(language){
$.getScript( "https://situx.github.io/SemanticDictionary/lang/"+language+"/pos/"+language+"_matches.js", function( data, textStatus, jqxhr ) {
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
  result+=word.replace("[","").replace("]","").trim()+" "+textToCuneiform(word.replace("[","").replace("]","").trim(),language)+separator;  
  result+=getHighlightedWord(word);
  if(!(result.includes("Translation:"))){
	  result+="Translation: "+translate(word,language,language2,escapechars)+separator;
  }
  return result;
}

function textToCuneiform(word,language){
	if(!(language in langcharmap)){
		langcharmap[language]={}
		langcharmap[language]["pos"]={}
		langcharmap[language]["transliteration"]={}
		var transmapp = window[language+"_map"]["records"];
		for(rec in transmapp){
			if(!(transmapp[rec]["transliteration"] in langcharmap[language]["transliteration"])){
				langcharmap[language]["transliteration"][transmapp[rec]["transliteration"]]=[]
			}
			langcharmap[language]["transliteration"][transmapp[rec]["transliteration"]].push(transmapp[rec])	
		}
	}
	console.log(langcharmap)
	sylls=word.toLowerCase().split("-");
	var resultt=""
			resultt+="( "
			for(k=0; k<sylls.length; ++k){
				syll=sylls[k];
				console.log("Syll: "+syll);
				if(syll in langcharmap[language]["transliteration"]){
					resultt+=langcharmap[language]["transliteration"][syll][0].script;
				}else{
					resultt+=syll+" ";
				}
                /*rec=getRecord(syll,transmap)
                //alert(JSON.stringify(rec[0]))
                //alert(JSON.stringify(rec[0].script))
				if(rec!= undefined && rec.length>0){
					resultt+=rec[0].script;					
				}else{
					resultt+=syll+" ";
				}*/
			}
	resultt+=") ";
	return resultt;
}

function getHighlightedWord(text,jsonexport) {
    var list = window[$('#langtextsel').val()+"_matches"]["matches"];
    //console.log("List: "+list)
    console.log("Text: "+text)
    //alert($('#leftsel').val()+"_matches");
   //alert(JSON.stringify(list));
    var item;
    var matches;
    var result="";
    for (var i = 0, imax = list.length; i < imax; i++) {
      item = list[i];

      if (item["match"]) {
        //item._trie = new marexandre.Trie();
        if (item["match"] instanceof RegExp) {
	  if(text.match(item.match)!=null){

         console.log(item.match);
	    console.log(text);
	    matches = [...text.matchAll(item.match)];
	  }
        } else {
          matches = item.match;
        }
        if(matches!=null){
            console.log("Matches: "+matches)
            console.log(item)
            console.log(item.tag)
            if(jsonexport){
				return item
			}
        //    console.log("List: "+list) HTML escape matching words
        var matchgroup=window[$('#langtextsel').val()+"_matches_groups"][item.tag];
        console.log("MatchGroup: "+JSON.stringify(window[$('#langtextsel').val()+"_matches_groups"]));
        console.log(matchgroup)
        result="";
        if(matchgroup!=null){
        for(j=0;j<matches[0].length;j++){
            console.log("iteration: "+j)
            console.log(matches[0][j])
            console.log(matchgroup[j])
            //console.log(matches[j].match(matchgroup[j]["match"]))
            if(typeof matches[0][j] !== 'undefined' && matchgroup[j] && matches[0][j].match(matchgroup[j]["match"])){
               // alert("Matchgroup: "+matchgroup[j]["description"]);
                result+=matchgroup[j]["description"]+"<br/>";
            }
        }
        }
	  //alert(item.description);
          //alert(JSON.stringify(item));
		 if(typeof item.description !== 'undefined')
			result+=item.description;
		  if(typeof item.value !== 'undefined')
			result+="Translation: "+item.value;
          //alert(result);
	  return result;
	}
      }
  }
  }
