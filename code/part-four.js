var year 		 = _getYear();
var day 		 = _getDay();
var month 		 = _getMonth();
var dayNameEng 	 = _getDayName();
var dayNameInd 	 = _getDayName(true);
var date_1 		 = _getDate();
var date_2 		 = _getDate("-");
var monthNameEng = _getMonthName();
var monthNameInd = _getMonthName(true);
var time 		 = _getTime();


_printTo("one","Year : "+ year);
_printTo("two","Day : "+ day);
_printTo("three","Month : "+ month);
_printTo("four","Day (ENG) : "+ dayNameEng);
_printTo("five","Day (IND) : "+ dayNameInd);
_printTo("six","Date 1 : "+ date_1);
_printTo("seven","Date 2 : "+ date_2);
_printTo("eight","Month (ENG) : "+ monthNameEng);
_printTo("nine","Month (IND) : "+ monthNameInd);
_printTo("ten","Time : "+ time);