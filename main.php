<?php
error_reporting(0);
// Открываем сессию
session_start();

// Получаем значение адресной строки
$page = $_GET['page'];
$data = array();
require_once 'config.php';


switch($page){

    case 'index':
        $data['title'] = "Главная страница";
        require_once 'templates/main.php';
        break;

    case 'contacts':
        $data['title'] = "Связаться со мной";
        require_once 'templates/main.php';
        break;


    case 'portfolio':
        $data['title'] = "Мои работы";
        $dbcon = connectToDB();
        $projects = getDataAsArray($dbcon, $data_sql['getPortfolio']);
        require_once 'templates/main.php';
        break;

    case 'auth':
        $data['title'] = "Вход для администратора";
        require_once 'templates/auth.php';
        break;

    case 'logout':
        unset($_SESSION['auth']);
        session_destroy();
        header("HTTP/1.1 307 Temporary Redirect");
        header("Location: /");
        exit;

}
