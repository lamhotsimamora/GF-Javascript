var run_console  = false;
var __data_angka = new Array("1","2","3","4","5","6","7","8","9","0"); var __data_huruf = new Array("?","$","*","~","!","^","%",">","-","|"); var _protocol; var _host; function _getHost(){_protocol = window.location.protocol+"//"; _host     = window.location.host +"/"; return _protocol+_host; } function _printTo(dom,content){try {if (dom===undefined) {if (run_console) {_writeLog("_printTo->Id of Object is nothing"); } return; } if (content===undefined) {if (run_console) {_writeLog("_printTo->Id Of Object is nothing"); } return; } document.getElementById(""+dom+"").innerHTML = content; } catch(err) {if (run_console) {_writeLog(err); } } } function _clear(dom){try {if (dom===undefined) {if (run_console) {_writeLog("_clear->Id of Object is nothing"); } return; } var __clear = ''; document.getElementById(""+dom+"").value = ""+__clear+""; } catch(err) {if (run_console) {_writeLog(err); } } } function _focus(dom){try {if (dom===undefined) {if (run_console) {_writeLog("_focus->Id of Object is nothing"); } return; } document.getElementById(""+dom+"").focus(); } catch(err) {if (run_console) {_writeLog(err); } } } function _getIdByName(_name){try {if (_name===undefined) {if (run_console) {_writeLog("_getIdByName->Name of Object is nothing"); } return; } var getId = document.getElementsByName(""+_name+"") ; return getId; } catch(err) {if (run_console) {_writeLog(err); } } } function _getNameById(_id){try {if (_getNameById===undefined) {if (run_console) {_writeLog("_getNameById->Id of Object is nothing"); } return; } var getName = document.getElementById(""+_id+"").name; return getName; } catch(err) {if (run_console) {_writeLog(err); } } } function _getValById(_id){try {if (_id===undefined) {if (run_console) {_writeLog("_getValById->Id of Object is nothing"); } return; } if (document.getElementById(""+_id+"").value==='') {return document.getElementById(""+_id+"").value; } else {var _value = document.getElementById(""+_id+"").value.trim(); return _value; } } catch(err) {if (run_console) {_writeLog(err); } } } function _getValByName(_name,_index){try {if (_index===undefined) {if (run_console) {_writeLog("_getValByName->Index of Object is nothing set default->0"); } _index=0; } if (_name===undefined) {if (run_console) {_writeLog("_getValByName->Name of Object is nothing"); } return; } if (document.getElementsByName(""+_name+"")[_index].value==='') {return document.getElementsByName(""+_name+"")[_index].value; } else {var _value = document.getElementsByName(""+_name+"")[_index].value.trim(); return _value; } } catch(err) {if (run_console) {_writeLog(err); } } } function _docWrite(_value){try{if (_value===undefined) {if (run_console) {_writeLog("_docWrite->Value is nothing"); } return; } document.write(_value); } catch(err) {if (run_console) {_writeLog(err); } } } function _colorFont(_str,_getColour){if (_getColour===undefined) {return "<font color='#e74c3c'>"+_str+"</font>"; } else {return "<font color='"+_getColour+"'>"+_str+"</font>"; } } function _newForm(_content,_url) {try{if (_content===undefined) {if (run_console) {_writeLog("_newForm->Value Is Not Found"); } return; } if (_url===undefined) {var myWindow = window.open("", "", "width=500,height=500"); myWindow.document.write(_content); myWindow.focus(); } else {var myWindow = window.open(_url, "", "width=500,height=500"); myWindow.focus(); } } catch(err) {if (run_console) {_writeLog(err); } } } function _isFunction(functionToCheck) {var getType = {}; return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'; } function _loadDoc(_url,_callbackFunctionOrContent){try {if (_url===undefined) {if (run_console) {_writeLog("_loadFrom->URL Is Not Found"); } return; } if (_callbackFunctionOrContent===undefined) {if (run_console) {_writeLog("_loadDoc->Create Function Call Back Or Your Id Object"); } return; } if (window.XMLHttpRequest) {xhttp = new XMLHttpRequest(); } else {xhttp = new ActiveXObject("Microsoft.XMLHTTP"); } xhttp.onreadystatechange = function() {if (this.readyState == 4 && this.status == 200) {if (_isFunction(_callbackFunctionOrContent)) {_callbackFunctionOrContent(this.responseText); if (run_console) {_writeLog("_loadDoc->Run Function Call Back "+_callbackFunctionOrContent,false); } } else {_printTo(_callbackFunctionOrContent,this.responseText); if (run_console) {_writeLog("_loadDoc->Success load document",false); } } } }; xhttp.open("GET", _url, true); xhttp.send(); } catch(err) {if (run_console) {_writeLog(err); } } } function _writeLog(_value,_type){var color_red = "#e74c3c"; var color_green ="#2ecc71"; if (_type===undefined) {console.log("%c "+_value+"", 'background: #ffffff; color: '+color_red); } else if (_type === false) {console.log("%c "+_value+"", 'background: #ffffff; color: '+color_green); } else {console.log("%c "+_value+"", 'background: #ffffff; color: '+_type); } } function _requestPOST(_URL,_Paramater,_callbackFunctionOrContent){try {if (_URL===undefined) {if (run_console) {_writeLog("_requestPOST->URL Is Not Found"); } return; } if (_Paramater===undefined) {if (run_console) {_writeLog("_requestPOST->Parameter POST Is Not Found"); } return; } if (_callbackFunctionOrContent===undefined) {if (run_console) {_writeLog("_requestPOST->Create Function Call Back Or Your Id Object"); } return; } if (window.XMLHttpRequest) {xhttp = new XMLHttpRequest(); } else {xhttp = new ActiveXObject("Microsoft.XMLHTTP"); } xhttp.onreadystatechange = function() {if (this.readyState == 4 && this.status == 200) {if (_isFunction(_callbackFunctionOrContent)) {_callbackFunctionOrContent(this.responseText); if (run_console) {_writeLog("_requestPOST->Run Function Call Back "+_callbackFunctionOrContent,false); } } else {_printTo(_callbackFunctionOrContent,this.responseText); if (run_console) {_writeLog("_requestPOST->Print Success",false); } } } }; xhttp.open("POST", _URL, true); xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); xhttp.send(""+_Paramater+""); } catch(err) {if (run_console) {_writeLog(err); } } } function _requestGET(_URL,_callbackFunctionOrContent){try {if (_URL===undefined) {if (run_console) {_writeLog("_requestGET->URL Is Not Found"); } return; } if (_callbackFunctionOrContent===undefined) {if (run_console) {_writeLog("_requestGET->Create Function Call Back Or Your Id Object"); } return; } if (window.XMLHttpRequest) {xmlhttp = new XMLHttpRequest(); } else {xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); } xmlhttp.onreadystatechange = function() {if (this.readyState == 4 && this.status == 200) {if (_isFunction(_callbackFunctionOrContent)) {_callbackFunctionOrContent(this.responseText); if (run_console) {_writeLog("_requestGET->Run Function Call Back "+_callbackFunctionOrContent,false); } } else {_printTo(_callbackFunctionOrContent,this.responseText); if (run_console) {_writeLog("_requestGET->Print Success",false); } } } }; xmlhttp.open("GET",""+_URL+"",true); xmlhttp.send(); } catch(err) {if (run_console) {_writeLog(err); } } } function _randomStr(_length){try {if (_length===undefined) {_length = 10; } var result = ""; var _char = "a1b2c3d4e5f6g7h8i9j0klmnopqrstuvwxyz"; for( var i=0; i < _length; i++ ) result += _char.charAt(Math.floor(Math.random() * _char.length)); if (run_console) {_writeLog("_randomStr->Success Generate Random String",false); } return result; } catch(err) {if (run_console) {_writeLog(err); } } } function _randomInt(_length){try {var result = ""; var _char = "1234567890"; if (_length===undefined) {_length = 10; } for( var i=0; i < _length; i++ ) result += _char.charAt(Math.floor(Math.random() * _char.length)); if (run_console) {_writeLog("_randomInt->Success Generate Random Integer",false); } return result; } catch(err) {if (run_console) {_writeLog(err); } } } function _encryptInt(_value){try {if (_value===undefined) {if (run_console) {_writeLog("_encryptInt->Value Is Not Found"); } return; } _value =  _value.toString(); var length_value = _value.length; var _data = new Array(length_value); for (var i = 0 ; i < length_value; i++) {var res = _value.substring(i, i+1); res  = _123abc(res); _data[i] = res; } var value_result = _data.toString(); String.prototype.replaceAll = function(target, replacement) {return this.split(target).join(replacement); }; if (run_console) {_writeLog("_encryptInt->Success Encrypt Integer",false); } return value_result.replaceAll(",","");; function _123abc(_value){if (_value===__data_angka[9]) {return __data_huruf[2]; } if (_value===__data_angka[7]) {return __data_huruf[4]; } if (_value===__data_angka[5]) {return __data_huruf[6]; } if (_value===__data_angka[3]) {return __data_huruf[8]; } if (_value===__data_angka[0]) {return __data_huruf[1]; } if (_value===__data_angka[1]) {return __data_huruf[3]; } if (_value===__data_angka[2]) {return __data_huruf[5]; } if (_value===__data_angka[4]) {return __data_huruf[7]; } if (_value===__data_angka[6]) {return __data_huruf[9]; } if (_value===__data_angka[8]) {return __data_huruf[0]; } if (run_console) {_writeLog("Value must be integer only -> " + _value); } return _value; } } catch(err) {if (run_console) {_writeLog(err); } } } function _decryptInt(_value){try {if (_value===undefined) {if (run_console) {_writeLog("_decryptInt->Value Is Not Found"); } return; } var length_value = _value.length; var _data = new Array(length_value); for (var i = 0 ; i < length_value; i++) {var res = _value.substring(i, i+1); res  = _abc123(res); _data[i] = res; } var value_result = _data.toString(); String.prototype.replaceAll = function(target, replacement) {return this.split(target).join(replacement); }; if (run_console) {_writeLog("_decryptInt->Success Decrypt Integer",false); } return value_result.replaceAll(",","");; function _abc123(_value){_value  = _value.toUpperCase(); if (_value===__data_huruf[2]) {return __data_angka[9]; } if (_value===__data_huruf[4]) {return __data_angka[7]; } if (_value===__data_huruf[6]) {return __data_angka[5]; } if (_value===__data_huruf[8]) {return __data_angka[3]; } if (_value===__data_huruf[1]) {return __data_angka[0]; } if (_value===__data_huruf[3]) {return __data_angka[1]; } if (_value===__data_huruf[5]) {return __data_angka[2]; } if (_value===__data_huruf[7]) {return __data_angka[4]; } if (_value===__data_huruf[9]) {return __data_angka[6]; } if (_value===__data_huruf[0]) {return __data_angka[8]; } if (run_console) {_writeLog("Key not found " + _value); } return _value; } } catch(err) {if (run_console) {_writeLog(err); } } } function _replaceJS(data){try {var res = data.replace("<script", "ssccrriipptt"); res = res.replace("script>", "ssccrriipptt"); res = res.replace("<script>", "ssccrriipptt"); res = res.replace("</script>", "ssccrriipptt"); res = res.replace("alert", "aallleerrtt"); res = res.replace("alert(", "alleerrtt"); res = res.replace(");","}};;"); return res; } catch(err) {if (run_console) {_writeLog(err); } } } function _replaceMaster(str){try {var res = str.replace("'","\'"); res = res.replace("<?php","%tag%php%"); res = _replaceJS(res); res = _escapeHtml(res); res = res.replace("#","%HASTAG%"); return res; } catch(err) {if (run_console) {_writeLog(err); } } } function _returnMaster(str){try {var result = str.replace("%HASTAG%","#"); result = result.replace("%tag%php%","<?php"); return result; } catch(err) {if (run_console) {_writeLog(err); } } } function _escapeHtml(str) {try {return str .replace(/&/g, "&amp;") .replace(/</g, "&lt;") .replace(/>/g, "&gt;") .replace(/"/g, "&quot;") .replace(/(?:\r\n|\r|\n)/g, " "); } catch(err) {if (run_console) {_writeLog(err); } } } function _checkEmail(email) {try {var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; return re.test(email); } catch(err) {if (run_console) {_writeLog(err); } } } function _setCookie(_name, _value, _exdays) {try{if (_name===undefined) {if (run_console) {_writeLog("_setCookie->Name of Cookie is nothing"); } return; } if (_value===undefined) {if (run_console) {_writeLog("_setCookie->Value of Cookie is nothing->set fefault from name"); } _value=_name; } if (_exdays===undefined) {_exdays=60; } var d = new Date(); d.setTime(d.getTime() + (_exdays*24*60*60*1000)); var expires = "expires="+ d.toUTCString(); document.cookie = _name + "=" + _value + ";" + expires + ";path=/"; if (run_console) {_writeLog("_setCookie->Success Create new cookie ",false); } } catch(err) {if (run_console) {_writeLog(err); } } } function _getCookie(_name) {try{if (_name===undefined) {if (run_console) {_writeLog("_getCookie->Name of Cookie is nothing"); } return; } var name = _name + "="; var decodedCookie = decodeURIComponent(document.cookie); var ca = decodedCookie.split(';'); for(var i = 0; i <ca.length; i++) {var c = ca[i]; while (c.charAt(0) == ' ') {c = c.substring(1); } if (c.indexOf(name) == 0) {if (run_console) {_writeLog("_getCookie-> Success get cookie of "+_name+" is "+c.substring(name.length, c.length),false); } return c.substring(name.length, c.length); } } return ""; } catch(err) {if (run_console) {_writeLog(err); } } } function _deleteCookie(_name){try{if (_name===undefined) {if (run_console) {_writeLog("_deleteCookie-> Name of cookie is nothing"); } return; } document.cookie = ""+_name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; } catch(err) {if (run_console) {_writeLog(err); } } } function _detectBrowser(){try{var isChrome = !!window.chrome && !!window.chrome.webstore; if (isChrome) {return "Chrome"; } var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0; if (isOpera) {return "Opera"; } var isFirefox = typeof InstallTrigger !== 'undefined'; if (isFirefox) {return "Firefox"; } var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification); if (isSafari) {return "Safari"; } var isIE = /*@cc_on!@*/false || !!document.documentMode; if (isIE) {return "Internet Explorer"; } var isEdge = !isIE && !!window.StyleMedia; if (isIE) {return "Edge"; } var isBlink = (isChrome || isOpera) && !!window.CSS; if (isBlink) {return "Blink"; } } catch(err) {if (run_console) {_writeLog(err); } } } function _getLocation(_cfunction,_dom) {try {if (_cfunction===undefined || _cfunction ===false ) {if (navigator.geolocation) {navigator.geolocation.watchPosition(function(position){var lotlang = "Latitude : "+position.coords.latitude + ", Longitude : " + position.coords.longitude; if (_dom===undefined) {alert(lotlang); } else {_printTo(""+_dom+"",lotlang); } } ,showError); } else {if (run_console) {_writeLog("_getLocation->Browser Not Support Location"); } } return; } else if (_isFunction(_cfunction)) {if (navigator.geolocation) {navigator.geolocation.watchPosition(_cfunction,showError); } else {if (run_console) {_writeLog("_getLocation->Browser Not Support Location"); } } }else {if (run_console) {_writeLog("_getLocation->"+_cfunction+" is not function"); } } } catch(err) {if (run_console) {_writeLog(err); } } function showError(error) {if (run_console){switch(error.code) {case error.PERMISSION_DENIED: _writeLog("User denied the request for Geolocation."); break; case error.POSITION_UNAVAILABLE: _writeLog("Location information is unavailable."); break; case error.TIMEOUT: _writeLog("The request to get user location timed out."); break; case error.UNKNOWN_ERROR: _writeLog("An unknown error occurred."); break; } } } } function _writeAlert(id_message,message,type){var psan   = '<div class="alert alert-'+type+' alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>'+message+'</div>'; _printTo(id_message,psan); } function _animation(_id,_text,_type){try{if (_id===undefined) {if (run_console) {_writeLog("_loadAnimate-> Id of object is not found"); } return; } if (_text===undefined) {if (run_console) {_writeLog("_loadAnimate-> Text Animate Null"); _text=""; } } if (_type===undefined) {if (run_console) {_writeLog("_loadAnimate-> Set default animate fa fa spinner"); } _type = '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>'; } if (_type==='refresh') {_type = '<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>'; } if (_type==='spinner') {_type = '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>'; } if (_type==='circle') {_type = '<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>'; } _printTo(_id,"<center><h4>"+_type+''+_text+'</h4></center>'); } catch(err) {if (run_console) {_writeLog(err); } } } function _valueInput(_id,_content){try{if (_id===undefined) {if (run_console) {_writeLog("_valueInput-> Id of object is not found"); } return; } if (_content===undefined) {if (run_console) {_writeLog("_valueInput-> Value of object is not found"); } _content = ""; } document.getElementById(""+_id+"").value = ""+_content+""; } catch(err) {if (run_console) {_writeLog(err); } } } function _getById(_dom,_function){try {if (_dom===undefined) {if (run_console) {_writeLog("_getById->Id of object is nothing"); } return; } if (_function===undefined) {return document.getElementById(""+_dom+""); } else {if (_isFunction(_function)) {var obj = document.getElementById(""+_dom+""); _function(obj); } } }catch (err) {if (run_console) {_writeLog(err); } } } function _setValue(_dom,_value){try {if (_dom===undefined) {if (run_console) {_writeLog("_setValue->Id of object is nothing"); } return; } if (_value===undefined) {if (run_console) {_writeLog("_setValue->Value is nothing set default empty"); } _value =""; } var obj = _getById(""+_dom+""); obj.value=""+_value+""; }catch (err) {if (run_console) {_writeLog(err); } } } function _openUrl(_url){try {if (_url===undefined) {if (run_console) {_writeLog("_openUrl->Url is nothing"); } return; } window.location.href=""+_url+""; }catch (err) {if (run_console) {_writeLog(err); } } } function _confirm(_question,_yesTextOrFunction,_noTextOrFunction){try {if (_question===undefined) {if (run_console) {_writeLog("_confirm->Question confirmation is nothing"); } return; } if (_yesTextOrFunction===undefined) {if (run_console) {_writeLog("_confirm->Todo Yes is nothing"); } return; } var r = confirm(""+_question+""); if (_noTextOrFunction===undefined) {if (r == true) {if (_isFunction(_yesTextOrFunction)) {_yesTextOrFunction(); } else {if (run_console) {_writeLog("_confirm->Todo Yes is not function"); } } } } else {if (r == true) {if (_isFunction(_yesTextOrFunction)) {_yesTextOrFunction(); } else {if (run_console) {_writeLog("_confirm->Todo Yes is not function"); } } } else {if (_isFunction(_noTextOrFunction)) {_noTextOrFunction(); } else {if (run_console) {_writeLog("_confirm->Todo No is not function"); } } } } }catch (err) {if (run_console) {_writeLog(err); } } } function _removeMe(_dom){try {if (_dom===undefined) {if (run_console) {_writeLog("_hidden -> Id of object is nothing"); } return; } _getById(""+_dom+"").style.display = "none"; }catch(err) {if (run_console) {_writeLog(err); } } } function _isHidden(_dom){try {if (_dom===undefined) {if (run_console) {_writeLog("_isStyle -> Id of object is nothing"); } return; } var get = _getById(""+_dom+"").style.visibility ; if (get==='hidden') {if (run_console) {_writeLog(get); } return true; }else {if (run_console) {_writeLog(get); } return false; } }catch(err) {if (run_console) {_writeLog(err); } } } function _showMe(_dom){try {if (_dom===undefined) {if (run_console) {_writeLog("_show -> Id of object is nothing"); } return; } _getById(""+_dom+"").style.visibility = "block"; }catch(err) {if (run_console) {_writeLog(err); } } } function _baseUrl(){try {return document.baseURI; }catch(err) {if (run_console) {_writeLog(err); } } } function _getAllCookie(){try {return document.cookie; }catch(err) {if (run_console) {_writeLog(err); } } } function _getTitle(){try {return document.title; }catch(err) {if (run_console) {_writeLog(err); } } } function _getDomain(){try {return document.domain; }catch(err) {if (run_console) {_writeLog(err); } } } function _countImage(){try {return document.images.length; }catch(err) {if (run_console) {_writeLog(err); } } } function _countLink(){try {return document.links.length; }catch(err) {if (run_console) {_writeLog(err); } } } function _countForm(){try {return document.forms.length; }catch(err) {if (run_console) {_writeLog(err); } } } function _hideMe(_dom){try {if (_dom===undefined) {if (run_console) {_writeLog("_hidden -> Id of object is nothing"); } return; } _getById(""+_dom+"").style.visibility = "hidden"; }catch(err) {if (run_console) {_writeLog(err); } } } function _onClick(_dom,_function){try {if (_dom===undefined) {if (run_console) {_writeLog("_onClick -> Id of object is nothing"); } return; } if (_function===undefined) {if (run_console) {_writeLog("_onClick -> Function is nothing"); } return; } if (_isFunction(_function)) {_getById(""+_dom+"").onclick = _function; } else {if (run_console) {_writeLog("_onClick -> "+_function+" Is not function"); } } } catch(err) {if (run_console) {_writeLog(err); } } } function _setImage(_dom,_image){try {if (_dom===undefined) {if (run_console) {_writeLog("_setImage -> Id of object is nothing"); } return; } if (_image===undefined) {if (run_console) {_writeLog("_setImage ->Image is nothing"); } return; } _getById(""+_dom+"").src = ""+_image+""; }catch(err) {if (run_console) {_writeLog(err); } } } function _refresh(URL) {try {if (URL===undefined) {window.location.href=''; } else {window.location.href=""+URL+""; } } catch (err) {if (run_console) {_writeLog("_refresh -> "+err); } } } function _isUrl(s) {try {if (s==='undefined') {if (run_console) {_writeLog("_isUrl-> Url is nothing"); return; } } var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; return regexp.test(s); }catch (err) {if (run_console) {_writeLog(err); return; } } } var flat_ui_color = {wet_asphalt   : "#34495e", midnight_blue : "#2c3e50", concrete      : "#95a5a6", asbestos      : "#7f8c8d", turqoise	  : "#1abc9c", green_sea     : "#16a085", peter_river   : "#3498db", belize_hole   : "#2980b9", amethyst      : "#9b59b6", wisteria      : "#8e44ad", alizarian     : "#e74c3c", pomegranate   : "#c0392b", clouds        : "#ecf0f1", silver        : "#bdc3c7", carrot        : "#e67e22", pumpkin       : "#d35400", sun_flower    : "#f1c40f", orange		  : "#f39c12", emerald       : "#2ecc71", nephritis	  : "#27ae60"}; function _qSelectorBackgroundCol(obj,color) {try {if (obj===undefined) {if (run_console) {_writeLog("_querySelector -> Class is undefined"); } return; } if (color===undefined) {if (run_console) {_writeLog("_querySelector -> color is undefined set default ->"+flat_color.alizarian); } color = flat_color.alizarian; } document.querySelector(""+obj+"").style.backgroundColor=color; } catch(err) {if (run_console) {_writeLog("_querySelector ->"+err); } } } function _qSelectorHTML(obj,value) {try {if (obj===undefined) {if (run_console) {_writeLog("_querySelector -> id of object is undefined"); } return; } if (value===undefined) {if (run_console) {_writeLog("_querySelector -> value is undefined"); } return; } document.querySelector(""+obj+"").innerHTML = value; } catch(err) {if (run_console) {_writeLog("_querySelector ->"+err); } } } function _onKeyUp(obj,function_user) {try {if (obj===undefined) {if (run_console) {_writeLog("_onKeyUp-> id of object is undefined"); return; } } if (function_user===undefined) {if (run_console) {_writeLog("_onKeyUp-> callback function is undefined"); return; } } if (_isFunction(function_user)==false) {if (run_console) {_writeLog("_onKeyUp-> "+function_user+" is not a function"); return; } } return _getById(""+obj+"").addEventListener("keyup", function_user); }catch(err) {if(run_console) {_writeLog("_onKeyUp-> "+err); } } } function _onKeyDown(obj,function_user) {try {if (obj===undefined) {if (run_console) {_writeLog("_onKeyDown-> id of object is undefined"); return; } } if (function_user===undefined) {if (run_console) {_writeLog("_onKeyDown-> callback function is undefined"); return; } } if (_isFunction(function_user)==false) {if (run_console) {_writeLog("_onKeyDown-> "+function_user+" is not a function"); return; } } return _getById(""+obj+"").addEventListener("keydown", function_user); }catch(err) {if(run_console) {_writeLog("_onKeyDown-> "+err); } } }
