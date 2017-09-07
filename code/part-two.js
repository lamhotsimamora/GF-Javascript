

_onClick("btn_load_doc",function(){
	_loadDoc("./server/page.html",function(a,b,c){
		if (a)
		{
			_printTo("display_document",a);
			_writeLog(b);
			_writeLog(c);
		}
	});
});


var my_name = "Lorem Ipsum !";
_onClick("btn_get",function(){
	_requestGET("./server/profile.php?name="+my_name+"",function(a,b,c){
		if (a)
		{
			_printTo("display_get",a);
			_writeLog(b);
			_writeLog(c);
		}
	});
});
_onClick("btn_post",function(){
	_requestPOST("./server/profile.php","name="+my_name,function(a,b,c){
		if (a)
		{
			_printTo("display_post",a);
			_writeLog(b);
			_writeLog(c);
		}
	});
});

_onClick("btn_put",function(){
	_requestPUT("./server/profile.php",function(a,b,c){
		if (a)
		{
			_printTo("display_put",a);
			_writeLog(b);
			_writeLog(c);
		}
	});
});