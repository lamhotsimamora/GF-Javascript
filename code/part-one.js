_focus("txt_username");
_setValue("txt_username","Lorem Ipsum");
_setValue("txt_email","LoremIpsum@gmail.com");

var txt_username = _getValById("txt_username");
var txt_email    = _getValById("txt_email");


_onClick("my_btn",function(){


		if (txt_username==='')
		{
			_focus("txt_username");
			return;	
		}
		

	   if (txt_email==='')
	   {
	   	   _focus("txt_email");
	   	  
	   	   return;	
	   }
	   else
	   {
	   	  alert("Your username "+txt_username);
	      alert("Your email "+txt_email);
	   }

});

_onClick("btn_get_content",function(){
	alert(_getContent('my_article'));
});

_onClick("my_btn_2",function(){
	var value = [
		_getValById('username'),
		_getValById('age'),
		_getValById('address'),
		_getValById('password')
	]

	var obj = [
			'username',
			'age',
			'address',
			'password'
	]

	if (_required(value,obj)){
		var result = _getValById(obj);
		alert(result);
	}
	
});

_onClick("clear_btn",function(){
	_clear("txt_username");
	_clear("txt_email");
});


_onClick("btn_print",function(){
	_printTo("test_print",'<article class="message is-danger"> <div class="message-header"> <p><strong>Danger</strong>! <a>Learn more</a></p> <button class="delete" aria-label="delete"></button> </div> <div class="message-body"> Lorem Ipsum ! </div> </article>'); 
});

_onClick("btn_click",function(){
alert("Do something here");
});

_writeLog("This is Custom Console Log ! Color Red");

_writeLog("This is Custom Console Log ! Color Green",false);

_onClick("btn_remove",function(){
	_clear("test_print",true);
});

_onDClick("btn_d_click",function(){
   alert("Double Click, Do something here");
});
_onClick("btn_body",function(){
	_writeBody("Lorem Ipsum");
});
