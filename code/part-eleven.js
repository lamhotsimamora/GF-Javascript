let rndm_clr = [
	flat_ui_color.alizarian, 
	flat_ui_color.turqoise,
	flat_ui_color.midnight_blue   
]
var ii = 0;


_onClick("btn_query",function(){
	_qSelectorBackgroundCol(".my_class",rndm_clr[ii]);
	if (ii==2)
	{
		ii=0;
	}
	else
	{
		ii++;
	}
	
	_qSelectorHTML("#my_div",_randomStr(15));
});


_onClick('btn_q',function(){
	 var me = _qSelector("#btn_q");
	 me.innerHTML = "READY";
	 alert(me);
});


