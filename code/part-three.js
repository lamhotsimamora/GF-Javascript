

 _onFocus("my_input",function(res){
	_printTo("result_event","On Focus "+ res);
});

_onResize(function(x,y){
	_printTo("result_event","Resize Screen : "+x  +" "+ y);
});

_onKeyUpToText("input_three","display_text_3");

_onKeyUp("input_one",function(v){
     _printTo("display_text_1",_getValById("input_one"));
}); 
_onKeyDown("input_two",function(v){
     _printTo("display_text_2",_getValById("input_two"));
}); 


_onMouseOver("my_text",function(){
	alert("Mouse Over !");
});

_onMouseOut("my_text",function(){
	_printTo("display_my_text","Mouse Out !");
});

_onMouseOver("my_text",function(){
	_printTo("display_my_text","Mouse Over !");
});

_rightClick(function(){
   alert("Do Something Here");
});

_onDrag("my_image",function(){
	_printTo("drag_drop","On Drag");
});

_onDrop("drag_drop",function(){
	_printTo("drag_drop","On Drop");
});