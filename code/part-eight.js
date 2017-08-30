_keyArrow(function(){
    _printTo("display_key","LEFT");
},function(){
     _printTo("display_key","RIGHT");
},function(){
    _printTo("display_key","UP");
},function(){
    _printTo("display_key","DOWN");
});

_keyCustom(function(){
    _printTo("display_key","BACKSPACE");
},_keyCode.backspace);

_keyCustom(function(){
	_printTo("display_key","CTRL");
	_printTo("display_key",_keyCode.ctrl);
},_keyCode.ctrl);

_keyCustom(function(){
	_printTo("display_key","SPACE");
	_writeLog(_keyCode.space_bar);
},_keyCode.space_bar); 

_keyCustom(function(){
	_printTo("display_key","CLEAR");
	_writeLog(_keyCode.clear);
},_keyCode.clear);

_keyCustom(function(){
	_printTo("display_key","TAB");
	_writeLog(_keyCode.tab);
},_keyCode.tab);

_keyCustom(function(){
	_printTo("display_key","CAPS LOCK");
	_writeLog(_keyCode.caps_lock);
},_keyCode.caps_lock);

_keyCustom(function(){
	_printTo("display_key","SHIFT");
	_writeLog(_keyCode.shift);
},_keyCode.shift);
 
_keyCustom(function(){
	_printTo("display_key","ALT");
	_writeLog(_keyCode.alt);
},_keyCode.alt);

_keyCustom(function(){
	_printTo("display_key","ESCAPE");
	_writeLog(_keyCode.escape);
},_keyCode.escape);

_keyCustom(function(){
	_printTo("display_key","HOME");
	_writeLog(_keyCode.home);
},_keyCode.home);
 
_keyCustom(function(){
	_printTo("display_key","INSERT");
	_writeLog(_keyCode.insert);
},_keyCode.insert);

_keyCustom(function(){
	_printTo("display_key","DELETE");
	_writeLog(_keyCode.delete);
},_keyCode.delete);

_keyCustom(function(){
	_printTo("display_key","END");
	_writeLog(_keyCode.end);
},_keyCode.end);

_keyCustom(function(){
	_printTo("display_key","ENTER");
	_writeLog(_keyCode.enter);
},_keyCode.enter);

_keyCustom(function(){
	_printTo("display_key","F1");
	_writeLog(_keyCode.f1);
},_keyCode.f1);

_keyCustom(function(){
	_printTo("display_key","F2");
	_writeLog(_keyCode.f2);
},_keyCode.f2);

_keyCustom(function(){
	_printTo("display_key","F3");
	_writeLog(_keyCode.f3);
},_keyCode.f3);

_keyCustom(function(){
	_printTo("display_key","F4");
	_writeLog(_keyCode.f4);
},_keyCode.f4);

_keyCustom(function(){
	_printTo("display_key","F5");
	_writeLog(_keyCode.f5);
},_keyCode.f5);

_keyCustom(function(){
	_printTo("display_key","F6");
	_writeLog(_keyCode.f6);
},_keyCode.f6);

_keyCustom(function(){
	_printTo("display_key","F7");
	_writeLog(_keyCode.f7);
},_keyCode.f7);

_keyCustom(function(){
	_printTo("display_key","F8");
	_writeLog(_keyCode.f8);
},_keyCode.f8);

_keyCustom(function(){
	_printTo("display_key","F9");
	_writeLog(_keyCode.f9);
},_keyCode.f9);

_keyCustom(function(){
	_printTo("display_key","F10");
	_writeLog(_keyCode.f10);
},_keyCode.f10);

_keyCustom(function(){
	_printTo("display_key","F11");
	_writeLog(_keyCode.f11);
},_keyCode.f11);

_keyCustom(function(){
	_printTo("display_key","F12");
	_writeLog(_keyCode.f12);
},_keyCode.f12);

_keyCustom(function(){
	_printTo("display_key","COMMA");
	_writeLog(_keyCode.comma);
},_keyCode.comma);

_keyCustom(function(){
	_printTo("display_key","SEMI COLON");
	_writeLog(_keyCode.semi_colon);
},_keyCode.semi_colon);

_keyCustom(function(){
	_printTo("display_key","NUM LOCK");
	_writeLog(_keyCode.num_lock);
},_keyCode.num_lock);

_keyCustom(function(){
	_printTo("display_key","MINUS");
	_writeLog(_keyCode.minus);
},_keyCode.minus);

_keyCustom(function(){
	_printTo("display_key","WINDOWS MENU");
	_writeLog(_keyCode.win_menu);
},_keyCode.win_menu);

_keyCustom(function(){
	_printTo("display_key","ADD");
	_writeLog(_keyCode.add);
},_keyCode.add);

_keyCustom(function(){
	_printTo("display_key","DIVIDED");
	_writeLog(_keyCode.divide);
},_keyCode.divide);

_keyCustom(function(){
	_printTo("display_key","NEXT");
	_writeLog(_keyCode.next);
},_keyCode.next);

_keyCustom(function(){
	_writeLog("PREVIOUS");
	_writeLog(_keyCode.num_lock);
},_keyCode.previous);
