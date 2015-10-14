<?php
	require_once "../vendor/autoload.php";
	require_once "../vendor/phpmailer/phpmailer/language/phpmailer.lang-ru.php";
	require_once 'data.php';
	// $mail new PHPMailer;

	// $mail->IsSMTP();
	// $mail->Host 		= "smtp.gmail.com";
	// $mail->SMTPAuth 	= true;
	// $mail->SMTPSecure	= "ssl";
	// $mail->Port 		= 465;
	// $mail->CharSet 		= 'UTF-8';

	//собираем данные для отправки
	$name		= $_POST['name'];
	$email 		= $_POST['email'];
	$msg 		= $_POST['message'];
	$kaptcha	= $_POST['g-recaptcha-response'];
	$dataBack 	= array();
	$captcha 	= $_POST['g-recaptcha-response'];
	$ip 		= $_SERVER['REMOTE_ADDR'];

if (!check_captcha($sekret_key, $captcha, $ip)){
	$dataBack['status']='error';
	$dataBack['text'] ='Вы не верно заполнили капчу';
}else {
	// $dataBack['status']='OK';
	// $dataBack['text'] ='Капча верна';
 	if (send_message_to_email (array ('name' => $name,'email' => $email,'message'=> $msg) ) ) {
		$dataBack['status']='OK';
		$dataBack['text'] ='Ваше письмо успешно отправлено';
    } else {
		$dataBack['status']='error';
		$dataBack['text'] ='Что-то пошло не так, письмо не отправлено';
    }

 
 }

function check_captcha($key, $catpcha, $ip){

    $url_to_send = "https://www.google.com/recaptcha/api/siteverify?secret=".$key.'&response='.$catpcha.'&ip='.$ip;
    $data_request = file_get_contents($url_to_send);
    $data =  json_decode($data_request, true);

    if(isset($data['success']) && $data['success'] == 1){
        return true;
    } else {
        return false;
    }
}

function send_message_to_email($dataMail){
	$mail = new PHPMailer;
	$mail->isSendmail();
	// Указываем отправителя письма
	$mail->setFrom('d.pushkarskaya.pr@gmail.com', 'Пушкарской Дарьи');
	// Указываем получателя письма
	$mail->addAddress('d.pushkarskaya.pr@gmail.com', "Пушкарской Дарье");
	// Указываем тему письма
	$mail->Subject = "Отправка письма с вебинара";
	// Устанавливаем текст сообщения
	$mail->msgHTML("Тестовое письмо c моего сайта-портфолио: ".$dataMail['message'].' '.$dataMail['name'].': '.$dataMail['email']);
	return $mail->send();
};







	header("Content-Type: application/json");
	echo json_encode($dataBack);
	exit;

?>