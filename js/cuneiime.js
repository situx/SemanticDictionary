var currentIMEDict;
var currentPatterns={};
var imedicts={}
var patterndicts={}
var currentPage=0;
var wordformbool=false;
var wordformchooser=false;
var lastpos=""

 var loadIMEDict=function(name){
     //alert("Loading New Dict "+name)
     if(name in imedicts){
            currentIMEDict=imedicts[name];
    }else{
        $.ajax({
    url: "ime/"+name+"_dict.json",
    dataType: 'json',
    success: function( data ) {
        try {
        currentIMEDict=data
       // alert(currentIMEDict)
    } catch(e) {
        alert(e); // error in the above string (in this case, yes)!
    }
            imedicts[name]=currentIMEDict;
    }
        });
    }
             if(name in patterndicts){
            currentPatterns=patterndicts[name];
    }else{
                    $.ajax({
    url: "pat/"+name+".json",
    dataType: 'json',
    success: function( data ) {
        try {
        currentPatterns={}
        for(pat in data["pattern"]){
            if(!(data["pattern"][pat]["postag"] in currentPatterns)){
                currentPatterns[data["pattern"][pat]["postag"]]=[]
            }
                currentPatterns[data["pattern"][pat]["postag"]].push(data["pattern"][pat]);
        }
       // alert(JSON.stringify(currentPatterns))
       // alert(currentIMEDict)
    } catch(e) {
        alert(e); // error in the above string (in this case, yes)!
    }
                patterndicts[name]=currentPatterns;
    }/*,
    error: function( data ) {
      alert( "ERROR:  " + JSON.stringify(data) );
    }*/
  });
    }
};

var createWordFormsList=function(word,wordform){
   result=""
   i=0;
    for(pat in currentPatterns[wordform]){
            result+="<li "+(i + 1 == 1 ? 'class="current" ' : '')+" style=\"font-family: '"+capitalize(self.imethod)+"'\">"+ (i + 1) + '. ' +word+currentPatterns[wordform][pat]["pattern"].substring(1,currentPatterns[wordform][pat]["pattern"].length)+"("+currentPatterns[wordform][pat]["wordcase"].substring(currentPatterns[wordform][pat]["wordcase"].indexOf('#')+1)+") ["+wordform+"]</li>"
            i++;
        }
    return result
};


(function($){
    $.fn.extend({
        insertAtCaret: function(myValue){
          return this.each(function(i) {
            if (document.selection) {
              //For browsers like Internet Explorer
              this.focus();
              sel = document.selection.createRange();
              sel.text = myValue;
              this.focus();
            }
            else if (this.selectionStart || this.selectionStart == '0') {
              //For browsers like Firefox and Webkit based
              var startPos = this.selectionStart;
              var endPos = this.selectionEnd;
              var scrollTop = this.scrollTop;
              this.value = this.value.substring(0, startPos)+myValue+this.value.substring(endPos,this.value.length);
              this.focus();
              this.selectionStart = startPos + myValue.length;
              this.selectionEnd = startPos + myValue.length;
              this.scrollTop = scrollTop;
            } else {
              this.value += myValue;
              this.focus();
            }
          });
        }
    });
    
    function capitalize(word) {
   return $.camelCase("-" + word);
}


    $.chineseInput = function(el, options){
        // To avoid scope issues, use 'self' instead of 'this'
        // to reference this class from internal events and functions.
        var self = this;
        
        // Access to jQuery and DOM versions of element
        self.$el = $(el);
        self.el = el;

        self.id = String(parseInt(Math.random() * 10000) * parseInt(Math.random() * 10000));

         // Set null options object if no options are provided
        if(!options || typeof options !== 'object') options = {};

         // Sanitize option data
        if(typeof options.input !== 'object') options.input = {initial: 'simplified', allowChange: true};
        if(typeof options.input.initial !== 'string') options.input.initial = 'simplified';
        if(options.input.initial.toLowerCase() != 'simplified' && options.input.initial.toLowerCase() != 'traditional') options.input.initial = 'simplified';
        options.active = options.active == true;
        options.input.allowChange = options.input.allowChange == true; // set it to boolean value true if it evaluates to true
        options.allowHide = options.allowHide == true;

        self.imethod="akkadian";
        loadIMEDict(self.imethod);
        self.currentText = '';
        self.currentPage = 0; // page of given options
        self.currentSelection = 1; // current selection on the current page (normally 1-5)
        self.lastPage = false; // are we at the last page of options?
        //self.options = [];
        self.html = '<span class="typing"></span><ul class="options"></ul>';
        self.url = 'http://localhost:8080/IMETest2/rest/lndwa/suggestion';
        self.url2 = 'http://localhost:8080/IMETest2/rest/lndwa/methods';
        self.url3 = 'http://localhost:8080/IMETest2/rest/lndwa/maps';
        self.paramNames = {'ime': 'ime',
                           'num': 'num',
                           'from':'from',
                           'page':'page',
                           'text':'text',
                           'callback': 'cb'};
        self.defaultNum = 10; // default number of options to load
        
        // Add a reverse reference to the DOM object
        self.$el.data("chineseInput", self);
        
        self.init = function(){
            
            self.options = $.extend({},$.chineseInput.defaultOptions, options);
            
            // Further initialization

            self.$el.keydown(self.keyDown);
            self.$el.keypress(self.keyPress);

             self.$toolbar = $('<div id="chinese-toolbar-' + self.id + '"></div>');
            self.$active = $('<label class="chinese-checkbox" for="check_' + self.id + '"><input type="checkbox"' + (self.options.active ? '' : ' checked="checked"')+ ' id="check_' + self.id + '"/> phonetic typing</label>');

            self.$toolbar.insertAfter(self.$el);
            self.$toolbar.css({'position': 'absolute', 'z-index': 1000}).show();
            self.reposition(self.$toolbar);
            self.options = $.extend({},$.chineseInput.defaultOptions, options);

            self.options = $.extend({},$.chineseInput.defaultOptions, options);
            if (self.options.allowHide) {
                
                var $hide = self.$active;
                $hide.appendTo(self.$toolbar);
                $hide.find('input').click(function(){
                    self.options.active = $(this).is(':checked')==false;
                    if (self.options.active == false){
                        self.currentText = '';
                        self.currentPage = 0;
                        self.updateDialog();
                    }
                    self.$el.focus();
                });
            }

            $(window).resize($.proxy(function() { // TODO: attach to textarea resize event
                this.self.updateDialog();
                this.self.reposition();
            }, {'self': self}));

            self.reposition();
        };
        
        self.keyDown = function(event){
            if (self.options.active) {
                if (self.currentText.length > 0){
                    switch(event.which){
                        case 37: // left 
                            self.previousChoice();
                            return false;
                        case 39: // right
                            self.nextChoice();
                            return false;
                        case 38:
                        	self.previousPage();
                        	return false;
                        case 40:
                        	self.nextPage();
                        	return false;
                    }
                }
                switch(event.which){
                    case 8: // backspace
                        if (self.currentText.length > 0){
                            self.currentText = self.currentText.substring(0,self.currentText.length-1);
                            self.updateDialog();
                            break;
                        }
                    default:
                        return true; // continue with keypress if one of the above criteria not met
                }
                event.preventDefault();
                return false;
            }
        };
        
        self.keyPress = function(event){
            if (self.options.active) {
                var key = String.fromCharCode(event.which);
                var pat = /[a-zA-Z,0-9]/;
                if (pat.test(key)){ 
                    var words = currentIMEDict[self.currentText+key];
                    if(words==undefined && self.currentText.length>0){
                        words=[]
                        event.preventDefault();
                        return false;
                    }
                    // pressed a character
                    if (self.currentText.length <= 20){ 
                        // set maximum num characters to arbitrary 20 limit
                        self.currentText += key;
                    }
                } else if (self.currentText.length > 0) {
                    if (key == ' '){ 
                        // pressed space
                        self.makeSelection(self.currentSelection - 1);
                    } else if (event.which == 13) {
                        // enter key pressed -- accept phonetic input
                        self.addText(self.currentText);
                        self.currentText = '';
                        self.currentPage = 0;
                        self.currentSelection = 1;
                        self.lastPage = false;
                    }else if (event.which == 33) { // go to previous page
                        alert("Key Up")
                        self.previousPage();
                    } else if (event.which == 34) { // go to next page
                        alert("Key Down")
                        self.nextPage();
                    }
                } else {
                    if (key == '.') { // pressed period
                        self.addText('\u3002');
                        event.preventDefault();
                        return false;
                    }
                    event.preventDefault();
                    return false;
                }
                if(!wordformchooser)
                    self.updateDialog();

                event.preventDefault();
                return false;
            }
        };

        self.addText = function(text){
            self.$el.insertAtCaret(text);
        };

        self.nextPage = function(){                
            if (!self.lastPage) {
                self.currentPage += 1;
            }
            self.updateDialog();
        };

        self.previousPage = function(){
            self.currentPage = parseInt(Math.max(0, self.currentPage - 1));
            self.lastPage = false;
            self.updateDialog();
        };

        self.nextChoice = function(){
            if (self.currentSelection < 5) {
                self.currentSelection += 1;
                self.updateDialog();
            } else {
                self.currentSelection = 1;
                self.nextPage(); 
            }
        };

        self.previousChoice = function(){
            if (self.currentSelection > 1) {
                self.currentSelection -= 1;
                self.updateDialog();
            } else if (self.currentPage > 0) {
                self.currentSelection = 5;
                self.previousPage(); 
            }
        };

        self.makeSelection = function(selectionIndex){
            if(wordformbool && !wordformchooser){
                    wordformchooser=true;
                    self.updateDialog(selectionIndex);
            }else{
            var choices = currentIMEDict[self.currentText];
            selectionIndex += self.currentPage * 5; // add current page to index
            //alert(createWordFormsList(self.currentText+choices[selectionIndex]["chars"].substring(choices[selectionIndex]["length"]+1),choices[selectionIndex]["postag"].replace("[","").replace("]","")))
            if (selectionIndex < 0) { 
                // if selection is smaller than zero, we use the text input as is, effectively canceling smart input
                self.addText(self.currentText);
                self.currentText = '';
                self.currentPage = 0;
                self.currentSelection = 1;
                self.lastPage = false;
            }
            if (choices && selectionIndex < choices.length){
                choice = choices[selectionIndex];
                self.addText(choice["chars"].substring(0,choice["length"]));
                self.currentText = '' //+ self.currentText.substring(len);
                self.currentPage = 0;
                self.currentSelection = 1;
                self.lastPage = false;
            }
            wordformchooser=false;
            lastpos=""
            }
        };

        self.reposition = function($el){
            var $toolbar = $el;
            if (!$toolbar){
                $toolbar = self.$toolbar;
            }
            $toolbar.css({'padding': '0 0 10px 5px'}).
                     position({my: 'left bottom',
                                at: 'left bottom',
                                of: self.$el,
                                collision: "none"});
        };

        self.updateDialog = function(selectionIndex){
            if (self.currentText.length > 0) {
                var options;
                if(wordformchooser){
                    //alert(JSON.stringify(self.getOptionsFromDatabase(self.currentText, self.currentPage)))
                    if(lastpos==""){
                            lastpos=self.getOptionsFromDatabase(self.currentText, self.currentPage)[selectionIndex]["postag"].replace("[","").replace("]","")
                    }
                    options = createWordFormsList(self.currentText,lastpos);
                                       // alert(JSON.stringify(options))
                }else{
                    options = self.getOptionsFromDatabase(self.currentText, self.currentPage);
                }
                if (options && options.length){
                    var $box = $('#chinese-ime');
                    if (!$box.size()){
                        $box = $(document.createElement('div')).draggable().
                                attr({'id': 'chinese-ime'}).
                                html(self.html);
                        $('body').append($box);
                    }
                    $box.find('.typing').text(self.currentText);
                    if(wordformchooser){
                         $box.find('ul').html(options)
                    } else{
                    var lis = [];
                    for (var i = 0; i < 5 && i < options.length; i++) {
                        lis.push('<li ' + (i + 1 == self.currentSelection ? 'class="current" ' : '') + "style=\"font-family: '"+capitalize(self.imethod)+"'\"> " + (i + 1) + '. ' + options[i]["chars"] +" "+((options[i]["concept"]!=undefined && options[i]["concept"]!="")?"<a href=\""+options[i]["concept"]+"\" target=\"_blank\">":"")+((options[i]["translation"]!=undefined && options[i]["translation"]!="")?"("+options[i]["translation"]+")":(options[i]["meaning"]!=undefined && options[i]["meaning"]!=""?"("+options[i]["meaning"]+")":"")) +((options[i]["concept"]!=undefined && options[i]["concept"]!="")?"</a>":"")+(options[i]["postag"]!=undefined && options[i]["postag"]!=""?" "+options[i]["postag"]+" ":"") +'</li>');
                    }
                        
                    $box.find('ul').html(lis.join('\n'));
                        }
                    $box.show();
                    var caretPosition = self.$el.getCaretPosition();
                    $box.css({
                        position: 'absolute',
                        left: self.$el.offset().left + caretPosition.left,
                        top: self.$el.offset().top + caretPosition.top
                    });
                } 
            } else {            	
                var $box = $('#chinese-ime').hide();
            }
        };

        self.getOptionsFromDatabase = function(text, page, num){
            if (typeof page == 'undefined') { page = self.currentPage; }
            if (typeof num == 'undefined') { num = 5; }
            var options = currentIMEDict[text];
            if (options && options.length >= (page + 1) * num) {
                // we have options in the database already, and enough of them
                return options.slice(page*num, (page+1)*num);
            } else if (options && options[options.length-1] == text) {
                // if the last option is the text itself, it means we've exhausted all suggestions
                self.lastPage = true;
                return options.slice(page*num);
            }else if(options.length<num){
                    return options
            }
            return false; // we need to call ajax first
        };

        // Run initializer
        self.init();
    };
    
    $.chineseInput.defaultOptions = {
        debug: false
    };
    
    $.fn.chineseInput = function(options){
        return this.each(function(){
            (new $.chineseInput(this, options));
        });
    };
    
})(jQuery);
