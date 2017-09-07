<?php


if (isset($_POST['name']))
{
	$result = '<article class="message is-primary"> <div class="message-header"> <p><strong>Response From Server !</strong><a> Example Ajax with POST </a></p> <button class="delete" aria-label="delete"></button> </div> <div class="message-body"> Name Is : "'.$_POST['name'].'" </div> </article>';
	echo $result;
}
else if (isset($_GET['name']))
{
	$result = '<article class="message is-warning"> <div class="message-header"> <p><strong>Response From Server !</strong><a> Example Ajax with GET </a></p> <button class="delete" aria-label="delete"></button> </div> <div class="message-body"> Name Is : "'.$_GET['name'].'" </div> </article>';
	echo $result;
}
else
{
	$result = '<article class="message is-success"> <div class="message-header"> <p><strong>Response From Server !</strong><a> Example Ajax </a></p> <button class="delete" aria-label="delete"></button> </div> <div class="message-body"> LOREM LOREM IPSUM </div> </article>';
	echo $result;
}