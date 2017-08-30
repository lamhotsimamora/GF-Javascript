 _previewImage("my_input","my_image");

 _onClick("btn_set_image",function(){
	_setImage("my_image_two","./image/logo.png");
 });
 _onClick("btn_count_image",function(){
	 var count_img = _countImage(); 
	 alert("Count Image "+count_img);
 });
