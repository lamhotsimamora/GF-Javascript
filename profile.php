<?php


if (isset($_POST['name']))
{
	echo "Success Get Name ".$_POST['name'];
}
else
{
	echo "POST Name Nothing";
}