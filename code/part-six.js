var t = _randomStr(25);
var u = _randomInt(10);
const token = t+"-"+u;
const my_data = {
	"id"	: 1,
	"status": true,
	"token"	: token,
	"ip"	: '192.168.12.1',
	"key"	: true
}

_onClick("btn_save",function(){
	_saveStorage(my_data,"_gQuery");
	_saveStorage("username_app","Lorem Ipsum");
	alert("Data has been save to storage !");
});

_onClick("btn_get",function(){
	var id 		= _getStorage('id_gQuery');
	var status  = _getStorage('status_gQuery');
	var token   = _getStorage('token_gQuery');
	var ip      = _getStorage('ip_gQuery');
	var key     = _getStorage('key_gQuery');

	let tmp = "ID     : "+id+" </br> "
	         +"Status : "+status+" </br> "
	         +"Token  : "+token+" </br> "
	         +"IP     : "+ip+" </br>"
	         +"Key    : "+key
		
	_printTo("display_data",'<article class="message is-primary"><div class="message-body"> <p>'+tmp+'</p> </div> </article>');
	
});


