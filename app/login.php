<?php
	require_once 'data.php';

	$login = htmlentities(strip_tags(trim($_POST['login'])), ENT_QUOTES);
	$password = md5($_POST['password']);
	$data = array();

	if ($login != $login_auth || $password != $pass_auth){
    $data['status'] = "error";
    $data['text'] = "Пользователя с такими данными нет в базе!";
    // header("HTTP/1.1 302 Moved Temporarily");
    // header("Location: login.html");
} else {
    $data['status'] = "OK";
    $data['text'] = "Вы успешно залогинены!";
    session_start();
    $_SESSION['admin']=true;
    
    // header("HTTP/1.1 302 Moved Temporarily");
    // header("Location: index.html");
}

header("Content-Type: application/json");
echo json_encode($data);
exit;