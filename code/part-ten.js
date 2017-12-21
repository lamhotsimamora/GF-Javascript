_onClick("btn_new_tab",function(){
	_newTab("https://www.google.com");
});

_onClick("btn_new_form_1",function(){
	_newForm("Lorem Ipsum");
});
_onClick("btn_new_form_2",function(){
	_newForm(false,"https://www.google.com");
});
_onClick("btn_new_form_3",function(){
	_newForm(false,"https://www.google.com",800,800);
});

const invalid_url = "www.github.com/lamhotsimamora/";
const valid_url   = "https://github.com/lamhotsimamora/";

_onClick("btn_url",function(){
	let result = _isUrl(invalid_url);
	if (result)
	{
		alert("URL "+invalid_url+" is VALID !");
	}
	else
	{
		alert("URL "+invalid_url+" ISN'T Valid !");
	}
});

_onClick("btn_url2",function(){
	let result = _isUrl(valid_url);
	if (result)
	{
		alert("URL "+valid_url+" is VALID !");
	}
	else
	{
		alert("URL "+valid_url+" ISN'T Valid !");
	}
});

_onClick("btn_count_url",function(){
	let count = _countLink();
	alert("Count URL -> "+count);
});
_onClick("btn_myurl1",function(){
	var u1 = _myUrl();

	alert(u1);
});
_onClick("btn_myurl2",function(){
	var u2 = _baseUrl();
 
	alert(u2);
});


_onClick("btn_query_url",function(){
	var title = _getTitle();
	_putUrl("",title,_myUrl()+"GF-Javascript/?page=testing");
	var a = _GET['page'];
	alert("The Parameter Is "+ a);
});


_onClick("btn_put_url",function(){
	  var token = _randomStr(15);
	 _putUrl("New URL","New URL",_myUrl()+"GF-Javascript/?token="+token+"");
});
