const my_attr = new _gData("my_attribute","gQuery","New Lorem Ipsum  - gQuery");

_onClick("btn_set",function(){
	my_attr.setData();
	alert("Success");
});

_onClick("btn_get",function(){
	let a = my_attr.dataById;
	let b = my_attr.dataByTag;

	alert(a+" "+b);
	_setValue("my_attribute",a);
});
