# GarudaFramework Javascript

I was created simple short code based on javascript. You can easy write code of Javascript. 
If you familiar with JQuery 'GF-1.js' framework can be used/colaboration on/with JQuery. 
You can add more function too to those code. 
Before you testing this framework , you can drink a cup of cofee ! Keep code and Thank you !

## Change LOG 

# NEW SYNTAX OF CODE _UPDATE_ 

For check valid URL
### ``` _isUrl("value"); ```

For remove object
### ``` _removeMe("id_of_object"); ```

For display object
### ``` _showMe("id_of_object");```
For hidden object
### ``` _hideMe("id_of_object"); ```
For check style hidden object
### ``` _isHidden("id_of_object");```
For give event onclick to button
###
```
_onClick("id_of_object",function(){

});

```
For get base URL of document
### ``` _baseUrl(); ```
For get domain of server
### ```_getDomain(); ```
For get all cookie client
### ```_getAllCookie(); ```
For get title of HTML
### ```_getTitle(); ```
For get count of image on HTML 
### ```_countImage(); ```
For get count of link on HTML 
### ```_countLink(); ```
For get count of Form on HTML
### ```_countForm(); ```
For set an image to image of object
### ```_setImage("id_of_object","image path"); ```

## Getting Started

First you have to downlaod "GF-1.js" and then copy this code to your HTML
```
<script src="JS/GF-1.js"></script>
```
or if you using internet you can use this code 
```
<script src="https://rawgit.com/lamhotsimamora/GF-Javascript/master/JS/GF-1.js"></script>
```

## Enable / Disable Console
You will be see log on console, and you can disable the console with change the value of variabel ```run_console```

1. Open "GF-1.js"
2. See on line 1
3. If you find this code ```var run_console  = true;```, change to ``` false ```, and the end the code will be 
``` var run_console  = false; ```

## Test the CODE. 

For get value of input text you just write code like this 
### ``` var id_text = _getValById("input_text_id"); ```

For get value of input text you just write code like this 
### ``` var name_text = _getValByName("name_of_input"); ```

For get count length of Input with type TEXT you just write code like this
### 
``` 
var get = _getIdByName("t_name");
_writeLog(get[0].type == "text"); 
```

For get name of object like DIV or Input Text or TextArea  you just write code like this
### ``` var id_obj = _getNameById("id_of_object"); ```

For only get id of DIV you just write code like this
### ``` var get_div = _getById("div_1"); ```
and you can do with this 
### ``` get.innerHTML="test"; ```

For set focus of input text you just write code like this
### ``` _focus("input_text_id"); ```

For clear input text you just write code like this
### ``` _clear("input_text_id"); ```

For set value of input text you just write code like this
### ``` _setValue("id_of_input_text","Hello World"); ```

For create new tab/form with URL you just write code like this
### ``` _newForm(false,"https://www.facebook.com"); ```

For create new tab/form with CONTENT you just write code like this
### ``` _newForm("Content STRING"); ```

For write to Inner HTML of object you just write code like this
### ``` _printTo("id_of_object","content"); ```

For open new url you just write code like this
### ``` _openUrl('https://www.w3schools.com'); ```

For create confirm alert box with only action YES you just write code like this
### 
```
_confirm("are you sure want to exit ?",function(){
    alert("Do Something");
}); 
```
or with action NO 
### 
```
_confirm("are you sure want to exit ?",function(){
			alert("Do Something");
},function(){
   alert("Do Nothing");
});
```
For document write you just write code like this
### ``` _docWrite("id_of_object"); ```

For write alert using Bootstrap like this page * [Bootstrap Alert](https://www.w3schools.com/bootstrap/bootstrap_alerts.asp) 

You can easy use that just write code like this
### ``` _writeAlert("id_of_object","testtt","danger"); ```

For load document from another page you just write code like this
### ``` _loadDoc("http://URL.com","id_of_object"); ```

or you can use function call back like this
### 
``` 
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

For request document with GET  from another page you just write code like this
### ``` _requestGET("url","id_of_object"); ```

or you can use function call back like this

### 
```
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

For request document with POST  from another page you just write code like this
### ``` _requestPOST("URL","name=example","id_of_object"); ```

or you can use function call back like this

### 
```
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

For create random string or random integer you just write code like this
### ``` var get_value = _randomStr(); ```

### ``` var get_value = _randomInt(); ```

For generate encrpyt of integer you just write code like this
### ``` var id_user = _encryptInt(12312323); ```

That function i was created with my simple algorithm. So no one know that key except "GF-1.js"

And for decrypt it you can use this code 
### ``` var id_user = _decryptInt(id_user); ```

For replace string like <script> </script> or  tag php <?php, you can use this code 
### ```_replaceMaster("string replace for tag php and javascript");```

For return the value of _replaceMaster, you can use this code 
### ```_returnMaster("hastag script"); ```

For ecape the HTML code, you can use this code
### ```_escapeHtml("value");```

Check email will be return true if email is valid
### ```_checkEmail("email@check.com");```

You can easy create cookie with this code
### ```_setCookie("name_cookie","value_cookie");``` -> 

You can easy get cookie with this code
### ```_getCookie("name_of_cookie");``` 

You can easy delete cookie with this code
### ```_deleteCookie("name_cookie");``` 

You can easy detect browser user with this code
### ``` var get_browser = _detectBrowser();``` 

You can easy get location user with this code ( return latitude and longitude )
### ```_getLocation(); ``` 

or you can use function call back like this

### 
```
_getLocation(function(result){
		var latlong = result.coords.latitude + "," + result.coords.longitude;
	}); 

```
You can write to console with color RED with this code
### ```_writeLog("test"); ``` -> 
or
You can write to console with color GREEN with this code
### ```_writeLog("test",false); ``` -> 



## See On My Framework Page

* [GarudaFramework](https://garudaframework.lamhotsimamora.com//page/example) - Garuda Framework Javascript Demo

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

