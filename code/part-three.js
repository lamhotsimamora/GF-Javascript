function message(a,b)
{
	return '<article class="message is-success"><div class="message-body"> <p>'+a+'</p>  '+b+' </div> </article>';
}

_onFocus("my_text",function(res){
	_printTo("result_event",message("On Focus",res));
});

_onResize(function(x,y){
	_printTo("result_event","Resize Screen : "+x  +" "+ y);
});