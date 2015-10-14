<?php
	session_start();
	$data = array();
	$data['checkadmin'] = $_SESSION['admin'];

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

?>

