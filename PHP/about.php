<?php

if (isset($_GET['p']))
{
	$page = $_GET['p'];

	echo "ABOUT PAGE ".$page;
}
else
{
	echo "Parameter is nothing";
}
