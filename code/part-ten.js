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