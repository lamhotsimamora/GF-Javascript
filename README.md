# Garuda Query Javascript | Pretty Code | Easy Use

I was created simple query of javascript code. You can easy write code of Javascript and you can easy to do DOM (document object manipulation).  
If you familiar with jQuery, gQuery can be used with jQuery. You can modify the source code. Everything has been tested and support much browser like Chrome, Firefox, Opera , Safari & Internet Explorer. 
Garuda Query has an identical symbol with underscore in front of function name, So you can use this library for other framework javascript.

<div style="text-align:center">
<center>
<img src="https://raw.githubusercontent.com/lamhotsimamora/GF-Javascript/master/browser-support.png">
</img></center>
</div>

## See Example *gQuery* On My Web
* [Room Chat](https://www.chat.lamhotsimamora.com) - Real Time Chat
* [GarudaFramework](https://garudaframework.lamhotsimamora.com//page/example) - Garuda Framework Javascript Demo
* [GarudaFrameworkPro](https://garudaframeworkpro.lamhotsimamora.com/javascript-library) - Garuda Framework Pro Demo

## Getting Started

First you have to download / clone this repository and then copy this code to your HTML. 
```
<script src="JS/GF-1.js"></script>
```
or if you want to use for production you can use this <a href="https://rawgit.com/lamhotsimamora/GF-Javascript/master/JS/GF-1.js">CDN</a>, just copy this code to your HTML
```
<script src="https://rawgit.com/lamhotsimamora/GF-Javascript/master/JS/GF-1.js"></script>
```

## Enable / Disable Console
You will be see log on console, and you can disable the console with change the value of variabel ```run_console```

1. Open "GF-1.js"
2. See on line 1
3. If you find this code ```var run_console  = true;```, change to ``` false ```, and the end the code will be 
``` var run_console  = false; ```

## Demo On Youtube
<a href="https://www.youtube.com/watch?v=dy5Lg0W7vlc">Part 1</a>
<a href="https://www.youtube.com/watch?v=m4iqjf0UgME">Part 2</a>
<a href="https://www.youtube.com/watch?v=UdOU55W9Fsw">Part 3</a>
<a href="https://www.youtube.com/watch?v=EZnZmzBm_Qw">Part 4</a>

----------------------------------------------

## NEW SYNTAX OF CODE _UPDATE_ || August 2017


For set disabled right click, you just write code like this ( https://lamhotsimamora.github.io/GF-Javascript/index-4.html )
```go
	_rightClick("Disabled Right Click");
```
or you can use callback function 
```go
	_rightClick(function(){
	   alert("Do Something Here");
	});
```
----------------------------------------------


For write value to body HTML <strong>document.body.innerHTML = "Lorem Ipsum"</strong>, you can write code like this
```go
_writeBody("Lorem Ipsum");
```
----------------------------------------------
For add item to list,
```go
<ul> 
  <li>A</li>
  <li>B</li>
</ul>
```
you can write code like this, ( https://lamhotsimamora.github.io/GF-Javascript/index-7.html )
###
```go
var data_list_1 = [
    "Apple","Banana","Orange"
];
_addList("list_1","list-group-item",data_list_1);
```
----------------------------------------------
For add item to table,
```go
<table class="table table-bordered">
        <thead>
		<tr>
			<th>No</th>
			<th>Firstname</th>
			<th>Lastname</th>
			<th>Email</th>
		</tr>
	</thead>
	<tbody id="table_val">
		<tr>
			<td>1</td>
			<td>A</td>
			<td>B</td>
			<td>C</td>
		</tr>
	</tbody>
</table>
```
you can write code like this, ( https://lamhotsimamora.github.io/GF-Javascript/index-7.html )
###
```go
var data_table = [
   1,"A","B","C"
];
_addItemTable("table_val",data_table);
```
----------------------------------------------
For draw image to canvas HTML, you can write code like this ( https://lamhotsimamora.github.io/GF-Javascript/index-6.html )
###  
```go
   _drawImage("my_canvas","my_image");	
```

For draw line to canvas HTML, you can write code like this
###  
```go
   _drawLine("my_canvas",30,12);
```

For draw text to canvas HTML, you can write code like this
###  
```go
  _drawText("my_canvas","Lamhot Simamora");
```

For draw circle to canvas HTML, you can write code like this
###  
```go
  _drawCircle("my_canvas",100,100,100,100);
```

For clear canvas HTML, you can write code like this
###  
```go
   _clearCanvas("my_canvas");
```
----------------------------------------------
For set data to attribute of object by element id, you just write code like this ( https://lamhotsimamora.github.io/GF-Javascript/index-5.html )
###  
```go
        <div id="d_username" data-username=""></div>

	var g1 = new _gData("d_username","data-username","Lorem Ipsum");
	g1.setData();
```

and you can get value data of attribute, like this
###  
```go
        <div id="d_username" data-username="Lorem Ipsum Name"></div>

	var g2 = new _gData("d_username","data-username");
	alert(g2.dataById);
	alert(g2.dataByTag);
```
----------------------------------------------
For give event keyboard arrow left , right, up and down ( https://lamhotsimamora.github.io/GF-Javascript/index-4.html )
###  
```go
	_keyArrow(function(){
	    _writeLog("LEFT");
	},function(){
	    _writeLog("RIGHT");
	},function(){
	   _writeLog("UP");
	},function(){
	   _writeLog("DOWN");
	});
```

or with custom key code, example backspace key code ( https://lamhotsimamora.github.io/GF-Javascript/index-4.html )
###  
```go
	_keyCustom(function(){
	     _writeLog("BACK SPACE");
	},_keyCode.backspace);
```

----------------------------------------------
For import file of javascript to HTML , you can do with this code ( https://lamhotsimamora.github.io/GF-Javascript/index-3.html )
###  
```go
   _import("path_of_file");
```

----------------------------------------------
For get the base URL you can use this method
###  
```go
   var my_url = _myUrl();
```
----------------------------------------------
For smooth scroll to object of DIV, you just write code like this
###  
```go
 _scroll("id_div");
```
----------------------------------------------
For get date, day,month, year and time, you can use this method 
###  
```go
var year 		= _getYear();
var day 		= _getDay();
var month 		= _getMonth();
var dayNameEng 		= _getDayName();
var dayNameInd 		= _getDayName(true);
var date_1 		= _getDate();
var date_2 		= _getDate("-");
var monthNameEng 	= _getMonthName();
var monthNameInd 	= _getMonthName(true);
var time 		= _getTime();
```
----------------------------------------------
For get screen width and height, you just write code like this
###  
```go
var screen_width = _sWidth;
var screen_height = _sHeight;
```
----------------------------------------------
Example code for preview image before upload with input file 
###  
```go
 _previewImage("id_of_input_file","id_of_image");
```
----------------------------------------------
### New variabel of flat ui color
### Color Flat UI  [![GoDoc](http://img.shields.io/badge/go-documentation-blue.svg?style=flat-square)](https://flatuicolors.com/) 

* wet_asphalt   =  "#34495e" 
* midnight_blue =  "#2c3e50" 
* concrete      =  "#95a5a6" 
* asbestos      =  "#7f8c8d" 
* turqoise	=  "#1abc9c" 
* green_sea     =  "#16a085" 
* peter_river   =  "#3498db" 
* belize_hole   =  "#2980b9" 
* amethyst      =  "#9b59b6" 
* wisteria      =  "#8e44ad" 
* alizarian     =  "#e74c3c" 
* pomegranate   =  "#c0392b" 
* clouds        =  "#ecf0f1" 
* silver        =  "#bdc3c7" 
* carrot        =  "#e67e22" 
* pumpkin       =  "#d35400" 
* sun_flower    =  "#f1c40f" 
* orange	=  "#f39c12" 
* emerald       =  "#2ecc71" 
* nephritis	=  "#27ae60"

Example code to write console log with color alizarian, Don't forget to write *flat_ui_color* before the name of color
###  
```go
_writeLog("Test",flat_ui_color.alizarian); 
```
----------------------------------------------
For give event onkeyup of input text 
### 
```go  
_onKeyUp("id_of_input_txt",function(){
         value = _getValById("txt_email");
         _printTo("display_txt_email1",value);
   }); 
```
For give event onkeyup of input text and then write to text
### 
```go  
    _onKeyUpToText("id_of_input_txt","id_of_object");
```
###
For give event onkeydown of input text 
### 
```go
_onKeyDown("id_of_input_txt",function(){
         value = _getValById("txt_email");
         _printTo("display_txt_email1",value);
   }); 
```
###
----------------------------------------------
For give query selector style background color 
### 
```go 
_qSelectorBackgroundCol(".selector_class1",flat_ui_color.alizarian);

```
For give query selector inner HTML 
### 
```go
_qSelectorHTML("#div1","Hello World !");
```
----------------------------------------------
For refresh the current page 
### 
```go
_refresh(); 
```
or with your URL 
### 
```go 
_refresh("www.example.com"); 
```

For check valid URL
### 
```go 
_isUrl("www.example.com"); 
```
----------------------------------------------
For remove the object 
### 
```go 
_removeMe("id_of_object"); 
```
For display object
### 
```go 
_showMe("id_of_object");
```
For hidden object
### 
```go
_hideMe("id_of_object"); 
```
For check style hidden object
### 
```go
_isHidden("id_of_object");
```
----------------------------------------------
For give event onclick to button
###
```go
_onClick("id_of_object",function(){
	// do something
});
```
For give event double click to button
###
```go
_onDClick("id_of_object",function(){
	// do something
});
```
----------------------------------------------
For get base URL of document
### 
```go
_baseUrl(); 
```

For get title of HTML
### 
```go
_getTitle(); 
```
For get count of image on HTML 
### 
```go
_countImage(); 
```
For get count of link on HTML 
### 
```go
_countLink();
```
For get count of Form on HTML
### 
```go
_countForm(); 
```
For set an image to image of object
### 
```go
_setImage("id_of_object","image path"); 
```
For get all cookie client
### 
```go
_getAllCookie(); 
```

For get domain name of server
### 
```go
_getDomain(); 
```

----------------------------------------------

For get value of input text you just write code like this 
### 
```go 
var id_text = _getValById("input_text_id"); 
```
For get value of input text you just write code like this 
### 
```go 
var name_text = _getValByName("name_of_input"); 
```

For get count length of Input with type TEXT you just write code like this
### 
```go 
var get = _getIdByName("t_name");
_writeLog(get[0].type == "text"); 
```

For get name of object like DIV or Input Text or TextArea  you just write code like this
### 
```go 
var id_obj = _getNameById("id_of_object"); 
```

For only get id of DIV you just write code like this
### 
```go
var get_div = _getById("div_1"); 
```
and you can do with this 
### 
```go 
get_div.innerHTML="test"; 
```
----------------------------------------------
For set focus of input text you just write code like this
### 
```go
_focus("input_text_id"); 
```

For clear input text you just write code like this
### 
```go 
_clear("input_text_id"); 

```
or clear div object you just write code like this
### 
```go 
_clear("id_object_div",true); 

```

For set value of input text you just write code like this
### 
```go
_setValue("id_of_input_text","Hello World"); 
```
----------------------------------------------
For create new tab/form with URL you just write code like this
### 
```go 
_newForm(false,"https://www.facebook.com"); 
```

For create new tab/form with CONTENT you just write code like this
### 
```go 
_newForm("Example STRING"); 
```
----------------------------------------------
For Inner HTML of object like DIV you just write code like this
### 
```go
_printTo("id_of_object","content"); 
```

For open new url you just write code like this
### 
```go 
_openUrl('https://www.w3schools.com'); 
```
----------------------------------------------
For create confirm alert box with only action YES you just write code like this
### 
```go
_confirm("are you sure want to exit ?",function(){
    alert("Do Something");
}); 
```
or with action NO 
### 
```go
_confirm("are you sure want to exit ?",function(){
			alert("Do Something");
},function(){
   alert("Do Nothing");
});
```
----------------------------------------------
For document write you just write code like this
### 
```go 
_docWrite("id_of_object"); 
```
----------------------------------------------
For write alert using Bootstrap like this page * [Bootstrap Alert](https://www.w3schools.com/bootstrap/bootstrap_alerts.asp) 

You can easy use that just write code like this
### 
```go 
_writeAlert("id_of_object","testtt","danger"); 
```
----------------------------------------------
For load document AJAX from another page you just write code like this
### 
```go 
_loadDoc("http://URL.com","id_of_object"); 
```

or you can use function call back like this
### 
```go 
	_loadDoc("http://URL.com",function(response){
		if (response==='SOMETHING')
		{
			// do something
		}
		else
		{
			// do something
		}
		
	}); 
```
Or if you wanna check status response 404, you can use this
### 
```go 
	_loadDoc("http://URL.com",function(response){
		if (response===false)
		{
		    // do something
		}
	}); 
```

For request document with GET Ajax from another page you just write code like this
### 
```go 
_requestGET("url","id_of_object"); 
```

or you can use function call back like this

### 
```go
_requestGET("http://URL.com/index.php?id=123",function(response){
	if (response==='T')
	{
		// do something
	}
	else
	{
		// do something
	}
}); 
```
Or if you wanna check status response 404, you can use this
### 
```go 
	_requestGET("http://URL.com/index.php?id=123",function(response){
		if (response===false)
		{
		    // do something
		}
	}); 
```

For request document with POST Ajax from another page you just write code like this
### 
```go
_requestPOST("URL","name=example","id_of_object"); 
```

or you can use function call back like this

### 
```go
_requestPOST("http://url.com/index.php","name=example",function(response){
	if (response==='T')
	{
		// do something
	}
	else
	{
		// do something
	}
}); 
```
Or if you wanna check status response 404, you can use this
### 
```go 
	_requestPOST("http://url.com/index.php","name=example",function(response){
		if (response===false)
		{
		    // do something
		}
	}); 
```
----------------------------------------------
For create random string or random integer you just write code like this
### 
```go 
var get_value = _randomStr(); 
```
### 
```go 
var get_value = _randomInt(); 
```
----------------------------------------------
For generate encode of integer you just write code like this
### 
```go 
var id_user = _encryptInt(12312323); 
```
That function i was created with my simple algorithm. So no one know that key except "gQuery"

And for decode it, you can use this code like this
### 
```go 
var id_user = _decryptInt(id_user); 
```
----------------------------------------------
For replace string like <script> </script> or  tag php <?php, you can use this code 
### 
```go
_replaceMaster("example replace string <html> <input type='text'> <button> <hr> and more");
```

For return the value of _replaceMaster, you can use this code 
### 
```go
_returnMaster("#example_hastag"); 
```
----------------------------------------------
For ecape the HTML code, you can use this code
### 
```go
_escapeHtml("<h1>hello world</h1>");
```

You can check email , and the result will be return true if email is valid
### 
```go
_checkEmail("email@check.com");
```
----------------------------------------------
You can easy create cookie with this code
### 
```go
_setCookie("name_cookie","value_cookie");
``` 

You can easy get cookie with this code
### 
```go
_getCookie("name_of_cookie");
``` 

You can easy delete cookie with this code
### 
```go
_deleteCookie("name_cookie");
``` 
----------------------------------------------
You can easy detect browser user with this code
### 
```go 
var get_browser = _detectBrowser();
``` 
----------------------------------------------
You can easy get location user with this code ( return latitude and longitude )
### 
```go
_getLocation(); 
``` 

or you can use function call back like this

### 
```go
_getLocation(function(result){
		var latlong = result.coords.latitude + "," + result.coords.longitude;
	}); 

```
----------------------------------------------
You can write to console log with color RED with this code
### 
```go
_writeLog("test"); 
``` 
or
You can write to console log with color GREEN with this code
### 
```go
_writeLog("test",false); 
``` 
----------------------------------------------

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

----------------------------------------------

## License

The MIT License (MIT) - see [`LICENSE.md`](https://raw.githubusercontent.com/lamhotsimamora/GF-Javascript/master/license.md) for more details

