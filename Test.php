<?php
/* decrpyInteger
29
47 
65
83
10
31
52
74
96
08*/

function _check123abc($value){
	$__data_angka = array("1","2","3","4","5","6","7","8","9","0");
	$__data_huruf = array("?","$","*","~","!","^","%",">","-","|");	

	if ($value===$__data_huruf[2])
	{
	return $__data_angka[9];
	}
	if ($value===$__data_huruf[4])
	{
	return $__data_angka[7];
	}
	if ($value===$__data_huruf[6])
	{
	return $__data_angka[5];
	}
	if ($value===$__data_huruf[8])
	{
	return $__data_angka[3];
	}
	if ($value===$__data_huruf[1])
	{
	return $__data_angka[0];
	}
	if ($value===$__data_huruf[3])
	{
	return $__data_angka[1];
	}
	if ($value===$__data_huruf[5])
	{
	return $__data_angka[2];
	}
	if ($value===$__data_huruf[7])
	{
	return $__data_angka[4];
	}
	if ($value===$__data_huruf[9])
	{
	return $__data_angka[6];
	}
	if ($value===$__data_huruf[0])
	{
	return $__data_angka[8];
	}
}

function _decryptInt($value){
	
	$length_value  = strlen($value);

	$new_data  =  array();

	for ($i=0; $i < $length_value ; $i++) { 
		$result = substr($value,$i, 1);

		$new_data[$i] = _check123abc($result);
	}
	$length = count($new_data);

	for($x=0;$x<$length;$x++)
	  {
		 echo $new_data[$x];
	  }
}

$id = $_POST['id'];


$id = ($id);

echo "Result : $id";


$process= _decryptInt($id)."</br>";

echo "$process";