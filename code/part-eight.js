_keyArrow(function(){
    _printTo("display_key","LEFT");
},function(){
     _printTo("display_key","RIGHT");
},function(){
    _printTo("display_key","UP");
},function(){
    _printTo("display_key","DOWN");
});

_keyCustom(function(){
    _printTo("display_key","BACKSPACE");
},_keyCode.backspace);