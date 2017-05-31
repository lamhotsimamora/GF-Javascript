<?php
$value = "1234";

$length = strlen($value);


//for ($i=0; $i < $length; $i++) { 
$result = substr($value,3,1);
echo $result;
//}