

_onClick("btn_load_doc",function(){
		_loadDoc("./server/page.html",function(r){
		if (r)
		{
			_printTo("display_document",r);
		}
		});
});


var my_name = "Lorem Ipsum !";
_onClick("btn_get",function(){
	_requestGET("./server/profile.php?name="+my_name+"",function(r){
		if (r)
		{
			_printTo("display_get",r);
		}
	});
});
_onClick("btn_post",function(){
	_requestPOST("./server/profile.php","name="+my_name,function(r){
		if (r)
		{
			_printTo("display_post",r);
		}
	});
});