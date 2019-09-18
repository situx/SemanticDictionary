
// Copyright 2010 William Malone (www.williammalone.com)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var canvas;
var context;
var canvasWidth = 200;
var canvasHeight = 190;
var padding = 25;
var lineWidth = 8;
var colorPurple = "#cb3594";
var colorGreen = "#659b41";
var colorYellow = "#ffcf33";
var colorBrown = "#986928";
var outlineImage = new Image();
var crayonImage = new Image();
var markerImage = new Image();
var eraserImage = new Image();
var crayonBackgroundImage = new Image();
var markerBackgroundImage = new Image();
var eraserBackgroundImage = new Image();
var crayonTextureImage = new Image();
var clickX = new Array();
var clickY = new Array();
var clickColor = new Array();
var clickTool = new Array();
var clickSize = new Array();
var clickDrag = new Array();
var paint = false;
var curColor = colorPurple;
var curTool = "crayon";
var curSize = "normal";
var mediumStartX = 18;
var mediumStartY = 19;
var mediumImageWidth = 93;
var mediumImageHeight = 46;
var drawingAreaX = 111;
var drawingAreaY = 11;
var drawingAreaWidth = 267;
var drawingAreaHeight = 200;
var toolHotspotStartY = 23;
var toolHotspotHeight = 38;
var sizeHotspotStartY = 157;
var sizeHotspotHeight = 36;
var sizeHotspotWidthObject = new Object();
sizeHotspotWidthObject.huge = 39;
sizeHotspotWidthObject.large = 25;
sizeHotspotWidthObject.normal = 18;
sizeHotspotWidthObject.small = 16;
var totalLoadResources = 8;
var curLoadResNum = 0;
var a=0;
var b=0;
var c=0;
var d=0;
var s=0;
var paleoCode=""
var strokeToChar={};
var strokeArray=[]
/**
* Calls the redraw function after all neccessary resources are loaded.
*/
function resourceLoaded()
{
	if(++curLoadResNum >= totalLoadResources){
		redraw();
	}
}

/****************************************************************************** Simple Canvas */

var clickX_simple = new Array();
var clickY_simple = new Array();
var clickDrag_simple = new Array();
var paint_simple;
var canvas_simple;
var context_simple;
/**
* Creates a canvas element.
*/
function prepareSimpleCanvas(ime,font)
{
	// Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
	var canvasDiv = document.getElementById('canvasSimpleDiv');
	canvas_simple = document.createElement('canvas');
	canvas_simple.setAttribute('width', canvasWidth);
	canvas_simple.setAttribute('height', canvasHeight);
	canvas_simple.setAttribute('id', 'canvasSimple');
	canvas_simple.setAttribute('style', 'background-color:white;border:gray 5px solid');
	canvasDiv.appendChild(canvas_simple);
	$("#aLabel").text("A: "+(a));
	$("#aLabel").css("background-color","white");
	$("#bLabel").text("B: "+(b));
	$("#bLabel").css("background-color","white");
	$("#cLabel").text("C: "+(c));
	$("#cLabel").css("background-color","white");
	$("#dLabel").text("D: "+(d));
	$("#dLabel").css("background-color","white");
	$("#sLabel").text("Strokes: "+(s));
	$("#sLabel").css("background-color","white");
    $("#pLabel").text("PaleoCode: "+paleoCode);
	$("#pLabel").css("background-color","white");
	$.getJSON("strokeime/"+ime+".json", function( data ) {
	    strokeToChar=data;
	  });
	if(typeof G_vmlCanvasManager != 'undefined') {
		canvas_simple = G_vmlCanvasManager.initElement(canvas_simple);
	}
	context_simple = canvas_simple.getContext("2d");
	
	// Add mouse events
	// ----------------
	$('#canvasSimple').mousedown(function(e)
	{
		// Mouse down location
		mouseX = e.pageX - this.offsetLeft;
		mouseY = e.pageY - this.offsetTop;
		
		paint_simple = true;
		addClickSimple(mouseX, mouseY, false);
		redrawSimple();
	});
	
	$('#canvasSimple').mousemove(function(e){
		if(paint_simple){
			addClickSimple(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
			redrawSimple();
		}
	});
	
	$('#canvasSimple').mouseup(function(e){
		paint_simple = false;
	  	redrawSimple();
		getDirection();
        pc=getPaleoCodeDirection();
        $("#pLabel").text("PaleoCode: "+pc);
        console.log("PaleoCodeDirection: "+pc)
        paleoCode=pc
		var strokes="";
		if(a>0){
		  strokes+="a"+a;
		}
		if(b>0)
		  strokes+="b"+b;
		if(c>0)
		  strokes+="c"+c;
		if(d>0)
		  strokes+="d"+d;
		$("#selectable").empty();
		if(strokes in strokeToChar){ 
		var innerString="";
		var i=1;
		for(i=0;i<strokeToChar[strokes].length;i++){
		  innerString+="<li class=\"ui-widget-content\" id=\"res"+i+"\" style=\"font-family:"+capitalize(font)+";font-size:300%;vertical-align: text-top;text-align:center;\"><div title=\""+strokeToChar[strokes][i][1]+"\">"+strokeToChar[strokes][i][0]+"</div></li>";
		}
		$("#selectable").html(innerString);
		}
	});
	
	$('#canvasSimple').mouseleave(function(e){
		paint_simple = false;
	});
	
	$('#clearCanvasSimple').mousedown(function(e)
	{
		clickX_simple = new Array();
		clickY_simple = new Array();
		clickDrag_simple = new Array();
		clearCanvas_simple(); 
	});
}

function capitalize(word) {
   return $.camelCase("-" + word);
}

function clearButton() {
  clickX_simple = new Array();
  clickY_simple = new Array();
  clickDrag_simple = new Array();
  $("#selectable").empty();
  	a=0;
	b=0;
	c=0;
	d=0;
	s=0;
    paleoCode=""
    strokeArray=[]
	$("#aLabel").text("A: "+(a));
	$("#bLabel").text("B: "+(b));
	$("#cLabel").text("C: "+(c));
	$("#dLabel").text("D: "+(d));
	$("#sLabel").text("Strokes: "+(s));
    $("#pLabel").text("PaleoCode: "+paleoCode);
  clearCanvas_simple()
}

function copyCharacter(character) {
      var s = $("textarea.chinese").val();
      $("textarea.chinese").val(s+character);
}

function addClickSimple(x, y, dragging)
{
	clickX_simple.push(x);
	clickY_simple.push(y);
	clickDrag_simple.push(dragging);
}

function clearCanvas_simple()
{
	context_simple.clearRect(0, 0, canvasWidth, canvasHeight);
}

function redrawSimple()
{
	clearCanvas_simple();
	
	var radius = 5;
	context_simple.strokeStyle = "#000000";
	context_simple.lineJoin = "round";
	context_simple.lineWidth = radius;
			
	for(var i=0; i < clickX_simple.length; i++)
	{		
		context_simple.beginPath();
		if(clickDrag_simple[i] && i){
			context_simple.moveTo(clickX_simple[i-1], clickY_simple[i-1]);
		}else{
			context_simple.moveTo(clickX_simple[i]-1, clickY_simple[i]);
		}
		context_simple.lineTo(clickX_simple[i], clickY_simple[i]);
		context_simple.closePath();
		context_simple.stroke();
	}
}

function getDirection(){
        var delta_x = clickX_simple[clickX_simple.length-1] - mouseX;
        var delta_y = clickY_simple[clickX_simple.length-1] - mouseY;
        strokeArray.push({"origx":clickX_simple[clickX_simple.length-1],"origy":clickY_simple[clickX_simple.length-1],"targetX":clickX_simple[clickX_simple.length-1]+delta_x,"targetY":clickY_simple[clickX_simple.length-1]+delta_y})
        console.log(JSON.stringify(strokeArray))
        var m=delta_y/delta_x;
        var radius = Math.atan(m)*100;
	$("#sLabel").text("Strokes: "+(++s));
        if(radius>140 && radius<200){
	    $("#aLabel").text("A: "+(++a));
            return 0;
        }else if(radius>-30 && radius<30){
	    $("#bLabel").text("B: "+(++b));
            return 1;
        }else if(radius<-30 && radius>-170){
	    $("#dLabel").text("D: "+(++d));
            return 2;
        }else if(radius>30 && radius<150){
	    $("#cLabel").text("C: "+(++c));
            return 3;
        }
        return 0;
    }
    
var alength=100    
var blength=100
var clength=120
var dlength=120

 
 
function getPaleoCodeDirection(){
        var paleoCodeResult=""
        let sortBy = [{
            prop:'origx',
            direction: 1
        },{
            prop:'origy',
            direction: 1
        }];
        strokeArray=strokeArray.sort(function(a,b){
        let i = 0, result = 0;
        while(i < sortBy.length && result === 0) {
            result = sortBy[i].direction*(a[ sortBy[i].prop ].toString() < b[ sortBy[i].prop ].toString() ? -1 : (a[ sortBy[i].prop ].toString() > b[ sortBy[i].prop ].toString() ? 1 : 0));
            i++;
        }
        return result;
        })
        console.log(JSON.stringify(strokeArray))
        for(stroke in strokeArray){
            var delta_x=strokeArray[stroke]["targetX"]-strokeArray[stroke]["origx"]
            var delta_y=strokeArray[stroke]["targetY"]-strokeArray[stroke]["origy"]
        var m=delta_y/delta_x;
        var radius = Math.atan(m)*100;
        var strokeType=""
        if(radius>140 && radius<200){
            if(delta_y<0){
                strokeType="!a"
            }else{
                strokeType="a";
            }
        }else if(radius>-30 && radius<30){
            if(delta_x>0){
                strokeType="b";
            }else{
                strokeType="!b";
            }
        }else if(radius<-30 && radius>-170){
            if(delta_x>0){
                strokeType="d";
            }else{
                strokeType="f";
            }
        }else if(radius>30 && radius<150){
            if(delta_x>0){
                strokeType="c";
            }else{
                strokeType="e";
            }
        }
        if(stroke>0){
            previousStroke=strokeArray[stroke-1]
            currentStroke=strokeArray[stroke]
            console.log(previousStroke["origx"]+"<"+currentStroke["origx"]+"="+(previousStroke["origx"]<currentStroke["origx"]))
            console.log(previousStroke["targetX"]+"<"+currentStroke["targetX"]+"="+(previousStroke["targetX"]<currentStroke["targetX"]))
            console.log("origx>targetX?"+currentStroke["origx"]>previousStroke["targetX"])
            if(previousStroke["origx"]<currentStroke["origx"] && previousStroke["targetX"]<currentStroke["targetX"] && currentStroke["origx"]>previousStroke["targetX"]){
                paleoCodeResult+="-"
            }else if(previousStroke["origy"]<currentStroke["origy"] && previousStroke["targetY"]<currentStroke["targetY"] 
                && currentStroke["origy"]>previousStroke["targetY"] && previousStroke["targetX"]<currentStroke["origx"]){
                paleoCodeResult+=":"
            }
        }
        paleoCodeResult+=strokeType
        }
        return paleoCodeResult;
    }

/**
* Adds a point to the drawing array.
* @param x
* @param y
* @param dragging
*/
function addClick(x, y, dragging)
{
	clickX.push(x);
	clickY.push(y);
	clickTool.push(curTool);
	clickColor.push(curColor);
	clickSize.push(curSize);
	clickDrag.push(dragging);
}

/**
* Clears the canvas.
*/
function clearCanvas()
{
	context.clearRect(0, 0, canvasWidth, canvasHeight);
	a=0;
	b=0;
	c=0;
	d=0;
	s=0;
	paleoCode=""
    strokeArray=[]
    $("#aLabel").text("A: "+(a));
	$("#bLabel").text("B: "+(b));
	$("#cLabel").text("C: "+(c));
	$("#dLabel").text("D: "+(d));
	$("#sLabel").text("Strokes: "+(s));
    $("#pLabel").text("PaleoCode: "+paleoCode);
}

/**
* Redraws the canvas.
*/
function redraw()
{
	// Make sure required resources are loaded before redrawing
	if(curLoadResNum < totalLoadResources){ return; }
	
	clearCanvas();
	
	var locX;
	var locY;
	if(curTool == "crayon")
	{
		// Draw the crayon tool background
		context.drawImage(crayonBackgroundImage, 0, 0, canvasWidth, canvasHeight);
		
		// Purple
		locX = (curColor == colorPurple) ? 18 : 52;
		locY = 19;
		
		context.beginPath();
		context.moveTo(locX + 41, locY + 11);
		context.lineTo(locX + 41, locY + 35);
		context.lineTo(locX + 29, locY + 35);
		context.lineTo(locX + 29, locY + 33);
		context.lineTo(locX + 11, locY + 27);
		context.lineTo(locX + 11, locY + 19);
		context.lineTo(locX + 29, locY + 13);
		context.lineTo(locX + 29, locY + 11);
		context.lineTo(locX + 41, locY + 11);
		context.closePath();
		context.fillStyle = colorPurple;
		context.fill();	

		if(curColor == colorPurple){
			context.drawImage(crayonImage, locX, locY, mediumImageWidth, mediumImageHeight);
		}else{
			context.drawImage(crayonImage, 0, 0, 59, mediumImageHeight, locX, locY, 59, mediumImageHeight);
		}
		
		// Green
		locX = (curColor == colorGreen) ? 18 : 52;
		locY += 46;
		
		context.beginPath();
		context.moveTo(locX + 41, locY + 11);
		context.lineTo(locX + 41, locY + 35);
		context.lineTo(locX + 29, locY + 35);
		context.lineTo(locX + 29, locY + 33);
		context.lineTo(locX + 11, locY + 27);
		context.lineTo(locX + 11, locY + 19);
		context.lineTo(locX + 29, locY + 13);
		context.lineTo(locX + 29, locY + 11);
		context.lineTo(locX + 41, locY + 11);
		context.closePath();
		context.fillStyle = colorGreen;
		context.fill();	

		if(curColor == colorGreen){
			context.drawImage(crayonImage, locX, locY, mediumImageWidth, mediumImageHeight);
		}else{
			context.drawImage(crayonImage, 0, 0, 59, mediumImageHeight, locX, locY, 59, mediumImageHeight);
		}
		
		// Yellow
		locX = (curColor == colorYellow) ? 18 : 52;
		locY += 46;
		
		context.beginPath();
		context.moveTo(locX + 41, locY + 11);
		context.lineTo(locX + 41, locY + 35);
		context.lineTo(locX + 29, locY + 35);
		context.lineTo(locX + 29, locY + 33);
		context.lineTo(locX + 11, locY + 27);
		context.lineTo(locX + 11, locY + 19);
		context.lineTo(locX + 29, locY + 13);
		context.lineTo(locX + 29, locY + 11);
		context.lineTo(locX + 41, locY + 11);
		context.closePath();
		context.fillStyle = colorYellow;
		context.fill();	

		if(curColor == colorYellow){
			context.drawImage(crayonImage, locX, locY, mediumImageWidth, mediumImageHeight);
		}else{
			context.drawImage(crayonImage, 0, 0, 59, mediumImageHeight, locX, locY, 59, mediumImageHeight);
		}
		
		// Yellow
		locX = (curColor == colorBrown) ? 18 : 52;
		locY += 46;
		
		context.beginPath();
		context.moveTo(locX + 41, locY + 11);
		context.lineTo(locX + 41, locY + 35);
		context.lineTo(locX + 29, locY + 35);
		context.lineTo(locX + 29, locY + 33);
		context.lineTo(locX + 11, locY + 27);
		context.lineTo(locX + 11, locY + 19);
		context.lineTo(locX + 29, locY + 13);
		context.lineTo(locX + 29, locY + 11);
		context.lineTo(locX + 41, locY + 11);
		context.closePath();
		context.fillStyle = colorBrown;
		context.fill();	

		if(curColor == colorBrown){
			context.drawImage(crayonImage, locX, locY, mediumImageWidth, mediumImageHeight);
		}else{
			context.drawImage(crayonImage, 0, 0, 59, mediumImageHeight, locX, locY, 59, mediumImageHeight);
		}
	}
	else if(curTool == "marker")
	{
		// Draw the marker tool background
		context.drawImage(markerBackgroundImage, 0, 0, canvasWidth, canvasHeight);
		
		// Purple
		locX = (curColor == colorPurple) ? 18 : 52;
		locY = 19;
		
		context.beginPath();
		context.moveTo(locX + 10, locY + 24);
		context.lineTo(locX + 10, locY + 24);
		context.lineTo(locX + 22, locY + 16);
		context.lineTo(locX + 22, locY + 31);
		context.closePath();
		context.fillStyle = colorPurple;
		context.fill();	

		if(curColor == colorPurple){
			context.drawImage(markerImage, locX, locY, mediumImageWidth, mediumImageHeight);
		}else{
			context.drawImage(markerImage, 0, 0, 59, mediumImageHeight, locX, locY, 59, mediumImageHeight);
		}
		
		// Green
		locX = (curColor == colorGreen) ? 18 : 52;
		locY += 46;
		
		context.beginPath();
		context.moveTo(locX + 10, locY + 24);
		context.lineTo(locX + 10, locY + 24);
		context.lineTo(locX + 22, locY + 16);
		context.lineTo(locX + 22, locY + 31);
		context.closePath();
		context.fillStyle = colorGreen;
		context.fill();	

		if(curColor == colorGreen){
			context.drawImage(markerImage, locX, locY, mediumImageWidth, mediumImageHeight);
		}else{
			context.drawImage(markerImage, 0, 0, 59, mediumImageHeight, locX, locY, 59, mediumImageHeight);
		}
		
		// Yellow
		locX = (curColor == colorYellow) ? 18 : 52;
		locY += 46;
		
		context.beginPath();
		context.moveTo(locX + 10, locY + 24);
		context.lineTo(locX + 10, locY + 24);
		context.lineTo(locX + 22, locY + 16);
		context.lineTo(locX + 22, locY + 31);
		context.closePath();
		context.fillStyle = colorYellow;
		context.fill();	

		if(curColor == colorYellow){
			context.drawImage(markerImage, locX, locY, mediumImageWidth, mediumImageHeight);
		}else{
			context.drawImage(markerImage, 0, 0, 59, mediumImageHeight, locX, locY, 59, mediumImageHeight);
		}
		
		// Yellow
		locX = (curColor == colorBrown) ? 18 : 52;
		locY += 46;
		
		context.beginPath();
		context.moveTo(locX + 10, locY + 24);
		context.lineTo(locX + 10, locY + 24);
		context.lineTo(locX + 22, locY + 16);
		context.lineTo(locX + 22, locY + 31);
		context.closePath();
		context.fillStyle = colorBrown;
		context.fill();	

		if(curColor == colorBrown){
			context.drawImage(markerImage, locX, locY, mediumImageWidth, mediumImageHeight);
		}else{
			context.drawImage(markerImage, 0, 0, 59, mediumImageHeight, locX, locY, 59, mediumImageHeight);
		}
	}
	else if(curTool == "eraser")
	{
		context.drawImage(eraserBackgroundImage, 0, 0, canvasWidth, canvasHeight);
		context.drawImage(eraserImage, 18, 19, mediumImageWidth, mediumImageHeight);	
	}else{
		alert("Error: Current Tool is undefined");
	}
	
	if(curSize == "small"){
		locX = 467;
	}else if(curSize == "normal"){
		locX = 450;
	}else if(curSize == "large"){
		locX = 428;
	}else if(curSize == "huge"){
		locX = 399;
	}
	locY = 189;
	context.beginPath();
	context.rect(locX, locY, 2, 12);
	context.closePath();
	context.fillStyle = '#333333';
	context.fill();	
	
	// Keep the drawing in the drawing area
	context.save();
	context.beginPath();
	context.rect(drawingAreaX, drawingAreaY, drawingAreaWidth, drawingAreaHeight);
	context.clip();
		
	var radius;
	var i = 0;
	for(; i < clickX.length; i++)
	{		
		if(clickSize[i] == "small"){
			radius = 2;
		}else if(clickSize[i] == "normal"){
			radius = 5;
		}else if(clickSize[i] == "large"){
			radius = 10;
		}else if(clickSize[i] == "huge"){
			radius = 20;
		}else{
			alert("Error: Radius is zero for click " + i);
			radius = 0;	
		}
		
		context.beginPath();
		if(clickDrag[i] && i){
			context.moveTo(clickX[i-1], clickY[i-1]);
		}else{
			context.moveTo(clickX[i], clickY[i]);
		}
		context.lineTo(clickX[i], clickY[i]);
		context.closePath();
		
		if(clickTool[i] == "eraser"){
			//context.globalCompositeOperation = "destination-out"; // To erase instead of draw over with white
			context.strokeStyle = 'white';
		}else{
			//context.globalCompositeOperation = "source-over";	// To erase instead of draw over with white
			context.strokeStyle = clickColor[i];
		}
		context.lineJoin = "round";
		context.lineWidth = radius;
		context.stroke();
		
	}
	//context.globalCompositeOperation = "source-over";// To erase instead of draw over with white
	context.restore();
	
	// Overlay a crayon texture (if the current tool is crayon)
	if(curTool == "crayon"){
		context.globalAlpha = 0.4; // No IE support
		context.drawImage(crayonTextureImage, 0, 0, canvasWidth, canvasHeight);
	}
	context.globalAlpha = 1; // No IE support
	
	// Draw the outline image
	context.drawImage(outlineImage, drawingAreaX, drawingAreaY, drawingAreaWidth, drawingAreaHeight);
}


/**/
