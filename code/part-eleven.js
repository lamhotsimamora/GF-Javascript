_onClick("btn_select",function(){
	_selectText("my_text");
});
_onClick("btn_add_select",function(){
		var data_val = [
			1,2,3,4,5
		];
		var data_fruit = [
			"Avocado","Apple","Banana","Broccoli","Orange"
		];
		_addOption("my_select",data_val,data_fruit);
});
_onClick("btn_get_select",function(){
	var value_first = _getOption("my_select");
	var text_first = _getOption("my_select",true);


	alert("Value : "+value_first);
	alert("Text  : "+text_first);
});

_onClick("btn_add_list",function(){
	var data_list_1 = [
	"Apple","Banana","Orange"
	];
	_addList("list_1","list-group-item",data_list_1);
});

var _incTable = 1;
_onClick("btn_add_item",function(){
	var data_table = [
	   _incTable,"Apple","Banana","Orange"
	];
	_addItemTable("table_val",data_table);
	_incTable++;
});


_onClick("btn_loc",function(){
	_getLocation(function(position){
		const latt  = position.coords.latitude; 
		const long = position.coords.longitude;

		alert("Latittude : "+latt +" Longitude : "+long);
	}); 
});

_onClick("btn_browser",function(){
	let browser = _detectBrowser();
	alert("The browser is "+browser);
});


function displayRandom()
{
	let random_string   = _randomStr();
	let random_integer  = _randomInt();
	let random_integer2 = _randomInt(25);

	_printTo("display_random","Random String : '"+random_string 
						+ "' , Random Integer : '"+random_integer
						+ "' , Random Integer (Length 20) : '"
						+random_integer2+"'");
}

_onClick("btn_random",function(){
	displayRandom();
});

displayRandom();