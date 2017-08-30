

_onFocus("my_text",function(res){
	_printTo("result_event",message("On Focus",res));
});

_onResize(function(x,y){
	_printTo("result_event","Resize Screen : "+x  +" "+ y);
});

_onKeyUpToText("my_username","display_text");

_onKeyUp("input_one",function(v){
     _printTo("display_text_1",_getValById("input_one"));
}); 
_onKeyDown("input_two",function(v){
     _printTo("display_text_2",_getValById("input_two"));
}); 

_onKeyUpToText("input_three","display_text_3");

_onMouseOver("my_image",function(){
	alert("Mouse Over !");
});

_onMouseOut("my_image",function(){
	alert("Mouse Out !");
});
_rightClick(function(){
   alert("Do Something Here");
});

_onDrag("my_image",function(){
	_printTo("drag_drop","On Drag");
});

_onDrop("my_image",function(){
	_printTo("drag_drop","On Drop");
});